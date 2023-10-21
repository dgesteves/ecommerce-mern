import { Router, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { UserModel } from '../../models/user';
import { UserErrors } from '../../constants/errors/user';
import { UserInfos } from '../../constants/infos/user';
import { IUser } from '../../models/user/types';

const router = Router();

router.post('/register', async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user: IUser = await UserModel.findOne({ username });

    if (user) {
      return res.status(400).json({ message: UserErrors.USER_ALREADY_EXISTS });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({ username, password: hashedPassword });

    await newUser.save();

    res.status(201).json({ message: UserInfos.USER_CREATED_SUCCESSFULLY });
  } catch (err) {
    console.error(err);

    res.status(500).json({ message: err.message });
  }
});

router.post('/login', async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user: IUser = await UserModel.findOne({ username });

    if (!user) {
      return res.status(400).json({ message: UserErrors.USER_DOES_NOT_EXIST });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: UserErrors.INVALID_CREDENTIALS });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({
      token,
      userID: user._id,
      message: UserInfos.USER_LOGGED_IN_SUCCESSFULLY,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({ message: err.message });
  }
});

export { router as userRouter };
