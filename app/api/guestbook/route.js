import { MongoClient } from 'mongodb';

export async function GET(req, res) {

    const client = new MongoClient(process.env.MONGODB_URI);

    try {
        await client.connect();
        const db = client.db('guestbook');

        const messages = await db
            .collection("messages")
            .find({})
            .toArray();

        return Response.json(messages);

    } catch (error) {
        return Response.json(error);

    } finally {
        await client.close();
    }

}

export async function POST(req) {
    const client = new MongoClient(process.env.MONGODB_URI);

    try {
        await client.connect();
        const db = client.db('guestbook');
        const data = await req.json();
        const message = await db
            .collection("messages")
            .insertOne(data);

        return Response.json(message);

    } catch (error) {
        return Response.json(error);

    } finally {
        await client.close();
    }
}