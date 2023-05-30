import { useField } from 'formik';
const RememberMe = ({ children, ...props }) => {
    const [field] = useField({ ...props, type: 'checkbox' });
    return (
        <label className="searchform__toggle_remember">
            <input className="searchform__toggle-checkbox" type="checkbox"{...field} {...props} />
            {children}
        </label>
    );
};


export default RememberMe