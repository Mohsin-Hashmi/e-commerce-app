import { useEffect } from "react";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"; 

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); 
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated, navigate]);

    if (!isAuthenticated) return null; 

    return children;
};
ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProtectedRoute;


