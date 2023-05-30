import * as Yup from 'yup';
export const SchemaForForm = Yup.object().shape({
    inputText: Yup.string()
        .required("Error message informing me of a problem"),
    password: Yup.string()
        .required("Please enter password")
        .min(2, (obj) => {
            const valueLength = obj.value.length;
            return `Введено ${valueLength} из 4 необходимых символов.`;
        }),
    username: Yup.string()
        .required("Пожалуйста, введите имя")
});
