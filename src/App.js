import logo from './logo.svg';
import './App.css';
import Amplify, { Auth } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';
import { I18n } from 'aws-amplify';

Amplify.configure(awsconfig);
I18n.setLanguage('es');

const dict = {
  'fr': {
      'Sign In': "Se connecter",
      'Sign Up': "S'inscrire"
  },
  'es': {
    'Sign In': 'Registrarse',
    'Sign in to your account': 'Como me le va vecino',
		'Sign Up': 'Regístrate',
		'Sign Out': 'Desconectar',
    'Username *': "Vecino escriba su nombre de usuario:",
    'Password  *': "La contraseña de siempre",
		'Forgot Password': 'Se te olvidó tu contraseña',
		Username: 'Nombre de usuario',
		Password: 'Contraseña',
		'Change Password': 'Cambia la contraseña',
		'New Password': 'Nueva contraseña',
		Email: 'Email',
		'Phone Number': 'Número de teléfono',
		'Confirm a Code': 'Confirmar un código',
		'Confirm Sign In': 'Confirmar inicio de sesión',
		'Confirm Sign Up': 'Confirmar Registrarse',
		'Back to Sign In': 'Volver a Iniciar sesión',
		'Send Code': 'Enviar código',
		Confirm: 'Confirmar',
		'Resend a Code': 'Reenviar un código',
		Submit: 'Enviar',
		Skip: 'Omitir',
		Verify: 'Verificar',
		'Verify Contact': 'Verificar contacto',
		Code: 'Código',
		'Account recovery requires verified contact information':
			'La recuperación de la cuenta requiere información de contacto verificada',

		'User does not exist': 'el usuario no existe',
		'User already exists': 'El usuario ya existe',
		'Incorrect username or password':
			'Nombre de usuario o contraseña incorrecta',
		'Invalid password format': 'Formato de contraseña inválido'
  }
};

I18n.putVocabularies(dict);

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <AmplifySignOut />
      <h2>My App</h2>
      </header>
    </div>
  );
}


export default withAuthenticator(App);
