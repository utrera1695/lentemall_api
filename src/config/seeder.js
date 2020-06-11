import bcrypt from 'bcryptjs';
import UserModel from "../api/user/user.model";

const SeedAdminUser = async () => {
  try {
    let findUser = await UserModel.findOne({
      email: 'admin@example.com'
    }).exec()
    if (!findUser) {
      let data = {
        email: 'admin@example.com',
        password: bcrypt.hashSync('admin123', 10),
        firstname: 'Administrador',
        lastname: 'Lentemall',
        role: 'A',
        referer_id: 'ADMIN-LENTEMAL'
      }
      let user = new UserModel(data);
      user.save();
      console.log('Usuario administrador creado')
    }
  } catch (error) {
    console.log(error)
  }
};

export default {
  SeedAdminUser
}