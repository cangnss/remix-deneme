import { json, redirect } from "@remix-run/node"
import {Form, useLoaderData} from "@remix-run/react"
import { getSession, commitSession } from "../session"

export const loader = async ({ request }) => {
	const session = await getSession(request.headers.get("Cookie"))
	const message = session.get("message")
	console.log(message)
	return json({ message })
}

export const action = async ({ request }) => {
	const session = await getSession(request.headers.get("Cookie"))
	const form = await request.formData();
	const email = form.get("email")
	const password = form.get("password")
	session.flash("message", "cg")
	console.log(email + "" + password)
	return redirect("/profile")
}

export default function LoginIndex(){
	const { message } = useLoaderData();
	
	return(
		<div>
			{ <p>{message}</p>}
			<Form method="post">
				<input type="email" name="email" />
				<input type="password" name="password" />
				<button type="submit">Gönder</button>
			</Form>
		</div>
	)

}
