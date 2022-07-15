import { json } from "@remix-run/node"
import {useLoaderData} from "@remix-run/react"
import { getSession } from "../session"

export const loader = async ({ request }) => {
	const session = await getSession(request.headers.get("Cookie"))
	const message = session.get("message")
	console.log("msg:",message)
	return json({ message })
}

export default function ProfileIndex(){
	const { message } = useLoaderData();	
	return (
		<div>
			{ message }
		</div>
	);

}
