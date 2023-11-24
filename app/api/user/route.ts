import User from '../../../back/model/User';
import { dbConnect } from '../../../back/db';

export async function GET() {
  try {
    dbConnect();
    const data = await User.find({});
    return Response.json({ data });
  } catch (error) {
    console.error(error);
  }
}
//supern0va.tistory.com/28 [초코민트냠냠블로그:티스토리]
