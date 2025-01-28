
import { fail, redirect } from "@sveltejs/kit";
import { sanityDetails } from "$lib/sanity";
import { createClient } from "@sanity/client";
import { env } from '$env/dynamic/private'
import nodemailer from 'nodemailer'

const authSanityDetails = {
    ...sanityDetails, 
    token: env.SANITY_TOKEN
}

const client = createClient(authSanityDetails)

export const actions = {
	default: async ({ request }) => {
        
		const data = await request.formData();

        const newMember = {
            _type: 'membership',
            name: data.get('name'),
            email: data.get('email'),
            phone: data.get('phone'),
            university: data.getAll('university')[1],
            school: data.get('school'),
            centre: data.get('centre'),
            programme: data.get('programme'),
        }
        
        if (!newMember.name || !newMember.email || !newMember.university) {
            return fail(400, { missing: true })
        }

        // MAIL TO NEW MEMBER
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: env.MAIL_USER,
                pass: env.MAIL_PASS,
            },
        });
        const memberMail = {
            from: env.MAIL_USER,
            to: newMember.email,
            subject: `Thank you for joining DSF`,
            html: `
                Dear <b>${newMember.name}</b>,
                <br><br>
                Thank you for joining DSF. The Democratic Students' Federation (DSF) would like to formally welcome you to the organization. We hope to have a vibrant engagement with you in the future in our united struggles against anti-student and anti-people policies in the campus and in the country.
                <br><br>
                To remind you (please ignore if already done), as an independent left student organization, we are in need of funds for continuing the functioning of the organization and undertake various initiatives. Therefore, kindly pay the membership fee of minimum Rs 5 on given UPI Id.
                <br><br>
                <a href="upi://pay?pa=9368135895@ptyes&pn=Democratic%20Students%27%20Federation&tn=Membership%20Fee%20(min%20Rs%205)&cu=INR">
                    <p>9368135895@ptyes</p>
                    <img src="cid:eab96c2c-da8d-4a21-88b4-e59e40e6da25" alt="QR Code" style="max-width: 200px;">
                </a>
                <br><br>
                You can also <a class="underline text-blue-500 font-bold" href="https://www.dsfofficial.in/contact">contact</a> any of our office bearers to pay the membership fee or for any other queries.
                <br><br>
                Best regards,
                <br>
                Democratic Students' Federation
            `,
            attachments: [{
                filename: 'qrcode.jpg',
                path: `https://www.dsfofficial.in/files/qrcode.jpg`,
                cid: 'eab96c2c-da8d-4a21-88b4-e59e40e6da25'
            }]
        };
        

        // MAIL TO DSF
        const dsfMail = {
            from: env.MAIL_USER,
            to: env.MAIL_USER,
            subject: `New membership from ${newMember.name}`,
            html: `
                New member has joined DSF. Details are as follows:
                <br><br>
                <b>Name:</b> ${newMember.name}<br>
                <b>Email:</b> ${newMember.email}<br>
                <b>Phone:</b> ${newMember.phone}<br>
                <b>University:</b> ${newMember.university}<br>
                <b>School:</b> ${newMember.school}<br>
                <b>Centre:</b> ${newMember.centre}<br>
                <b>Programme:</b> ${newMember.programme}<br>
            `,
            replyTo: newMember.email
        };

        // POST TO SANITY
        const res = await client.create(newMember)

        if (res) {
            // SEND MAILS
            await transporter.sendMail(memberMail);
            await transporter.sendMail(dsfMail);
            redirect(303, '/join-us/success')
            return { success: true }
        }
        else {
            redirect(303, '/join-us?msg=try-again')
        }
        
	}
}