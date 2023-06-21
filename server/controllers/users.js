import User from "../models/User.js";

//read
export const getUser = async (req, res) => {
    try {
        const { id } = req.params; //grab id from string
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
//grab user friends
export const getUserFriends = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        //multiple api calls to database
        const friends = await Promise.all(
            user.friends.map((id) => User.findById(id))

        );
        const formattedFriends = friends.map(
            ({ _id, firstName, lastName, occupation, location, picturePath }) => {
                return { _id, firstName, lastName, occupation, location, picturePath };
            }
        )
        res.status(400).json(formattedFriends)
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

//update
export const addRemoveFriends = async (req, res) => {

    try {
        const { id, friendId } = req.params;
        const user = await User.findById(id);
        const friend = await User.findById(friendId);

        //if present remove or remove then present in both user end
        if (user.friends.includes(friendId)) {
            user.friends = user.friends.filter((id) => id !== friendId);
            friend.friends = friend.friends.fitler((id) => id !== id);
        } else {
            user.friends.push(friendId);
            friend.friends.push(id);
        }
        //if friend to one also friend to other or remove from one also remove from other
        await user.save();
        await friend.save();


        const friends = await Promise.all(
            user.friends.map((id) => User.findById(id))

        );
        const formattedFriends = friends.map(
            ({ _id, firstName, lastName, occupation, location, picturePath }) => {
                return { _id, firstName, lastName, occupation, location, picturePath };
            }
        )
        res.status(400).json(formattedFriends)
    }

    catch (err) {
        res.status(404).json({ message: err.message })

    }


}