import bcrypt from 'bcryptjs';
import UserModel from "../api/user/user.model";
import configProvider from '../api/config/config.provider';

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

    }
  } catch (error) {
    console.log(error)
  }
};

const SeedConfig = async () => {
  try {
    const config = await configProvider.Get()
    if (!config) {
      let data = {
        info: [{
            label: 'correo',
            data: 'info@lentemall.com'
          },
          {
            label: 'teléfono',
            data: '+581234567890'
          }
        ]
      }
      await configProvider.Save(data)
      console.log('Configuración creada')
    }


  } catch (error) {
    console.log(error)
  }
}
export default {
  SeedAdminUser,
  SeedConfig
}