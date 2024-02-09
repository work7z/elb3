export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {
  let data = {
    a: 'hello,world'
  }
  return Response.json({ data })
}