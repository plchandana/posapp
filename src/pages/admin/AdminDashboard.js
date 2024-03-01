import React, {useState} from 'react';
import "../../assets/theme/AdminDashboardStyles.css";

import UserManagement from './manage/UserManagement';
import ItemManagement from "./manage/ItemManagement";
import OrderManagement from "./manage/OrderManagement";

const AdminDashboard = () => {

    const [currentPage, setCurrentPage] = useState(null);

    const handleButtonClick = (page) => {
        setCurrentPage(page);
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'UserManagement':
                return <UserManagement/>;
            case 'ItemManagement':
                return <ItemManagement/>;
            case 'OrderManagement':
                return <OrderManagement/>;
            default:
                return null;
        }
    };

    return (
        <div className="admin-panel">
            <div className={"container_flex_col admin-left-side"}>

                <div className={"admin_left_header"}>
                    <div className={"header_left"}/>
                    <div className={"header_title"}>
                        <p> ADMIN DASHBOARD</p>
                    </div>
                </div>

                <div className={"container_flex_col admin_button_section"}>
                    <button className={currentPage === 'UserManagement' ? 'selected btn' : ''}
                            onClick={() => handleButtonClick('UserManagement')}>User Manage
                    </button>
                    <button className={currentPage === 'ItemManagement' ? 'selected btn' : ''}
                            onClick={() => handleButtonClick('ItemManagement')}>Item Manage
                    </button>
                    <button className={currentPage === 'OrderManagement' ? 'selected btn' : ''}
                            onClick={() => handleButtonClick('OrderManagement')}>Order Manage
                    </button>
                </div>

                <div className={"admin_bottom"}>
                    <button className={"btn"}>LogOut
                    </button>
                </div>

            </div>

            <div className="page-container">
                {renderPage()}
            </div>
        </div>
    );

}

export default AdminDashboard;
