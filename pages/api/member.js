import Member from "../../models/Member";
import dbConnect from "../../middleware/mongoose";

const handler = async (req, res) => {

    await dbConnect();

  if (req.method == "POST") {
    const { identity, profession, professionName, experience, interest, looking } = req.body;

    console.log(req.body)

    try {

        let member = new Member({
            name: identity.name,
            email: identity.email,
            city: identity.city,
            twitter: identity.twitter,
            discord: identity.discord,
            profession: profession,
            organization: professionName,
            experience: experience,
            interest: interest,
            lookingFor: looking

        })

        await member.save();

      return res.status(201).json(member);
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    return res.status(405).json({ message: "This method is not allowed" });
  }
};

export default handler;
