import bcrypt from 'bcrypt';

export async function hashPassword(password) {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        return hashedPassword;
    } catch (error) {
        console.error('Error al generar el hash de la contraseña:', error);
        throw new Error('Error al generar el hash de la contraseña');
    }
}