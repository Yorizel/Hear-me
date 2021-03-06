import * as yup from "yup";

export const validationSchema = yup.object().shape({
        first_name: yup.string('Insira seu primeiro nome').required('Este campo é obrigatorio'),

        last_name: yup.string('Insira seu ultimo nome').required('Este campo é obrigatorio'),

        email: yup.string('Insira seu email').email('Insira um email valido').required('Este campo é obrigatorio'),

        user: yup.string('Insira seu nome de usuario').required('Este campo é obrigatorio'),
 
        cpf_cnpj: yup.string('Insira seu cpf ou cnpj').required('Este campo é obrigatorio').matches(
            /([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})/,
            'Insira um cpf ou cnpj valido')
            .min('11', 'Deve conter no minimo 11 numeros')
            .max('14', 'Deve conter no maximo 14 numeros'),

        password: yup.string('Insira sua senha').required('Este campo é obrigatorio').matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            'Precisa conter no mínimo 8 letras, Uma maiúscula, uma minuscula, Um numero e um caracter especial').min('8' ,'Precisa conter no minimo 8 letras'),

        password_confirmation: yup.string('Confirme sua senha').oneOf([yup.ref('password'), null], 'As senhas não batem').required('Este campo é obrigatorio')
    })
;

export const validationSchemaSignIn = yup.object().shape({
    email: yup.string('Insira seu email').email('Insira um email valido').required('Este campo é obrigatorio'),
    password: yup.string('Insira sua senha').required('Este campo é obrigatorio')

});

export const validationSchemaPatientAdd = yup.object().shape({
    patient_name: yup.string('Insira o nome do paciente').required('Este campo é obrigatorio'),
    patient_email: yup.string('Insira o email do paicente').required('Este campo é obrigatorio').email('Insira um email valido'),
    patient_age: yup.string('Este campo só aceita numeros').required('Este campo é obrigatorio'),
    patient_cellphone_number: yup.string('Este campo só aceita numeros').required('Este campo é obrigatorio'),
    patient_address_district: yup.string('Insira o bairro que seu paciente mora').required('Este campo é obrigatorio'),
    patient_address_street: yup.string('Insira a rua que seu paciente mora').required('Este campo é obrigatorio'),
    patient_address_number: yup.string('Insira o lote ou numero do endereço do seu paciente').required('Este campo é obrigatorio')
})
