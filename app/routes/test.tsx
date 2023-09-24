import { UserButton } from "@clerk/remix"
import { getAuth } from "@clerk/remix/ssr.server"
import { ActionFunction, LoaderFunction, json } from "@remix-run/node"
import { Form } from "@remix-run/react"

export const loader: LoaderFunction = async (req) => {
  const { userId } = await getAuth(req)
  console.log('loader user', userId)
  return json({ loader: "This is something" })
}

export const action: ActionFunction = async (req) => {
  const { userId } = await getAuth(req)
  console.log('action user', userId)
  return json({ test: "This is a test" })
}

export default function Test() {
  return (
    <div>
      <UserButton />

      <Form action="/test" method="post">
        <label htmlFor="get-data">Get Data</label>
        <button type="submit" id="get-data">Get Data</button>
      </Form>
    </div>
  )
}

