import { useField } from 'formik';
const CheckBox = ({ children, ...props }) => {
    const [field] = useField({ ...props, type: 'checkbox' });
    return (
        <label className="searchform__toggle">
            <input className="searchform__toggle-checkbox" type="checkbox"{...field} {...props} />
            {children}
        </label>
    );
};
export default CheckBox