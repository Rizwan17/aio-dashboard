import { useRef } from 'react';
import { IoNotificationsOutline } from 'react-icons/io5';
import DropdownMenu from '../DropdownMenu';
import IconWrapper from '../IconWrapper';
import UserIcon from '../UserIcon';
import styles from './Header.module.css';

const NotificationsIcon = ({
    onClick = () => {}
}) => (
    <IconWrapper onClick={onClick}
                            style={{ 
                                top: '2px',
                                fontSize: '20px'
                             }}
                        >
                            <IoNotificationsOutline />
                        </IconWrapper>
)

const Header = () => {


    return (
        <section className={styles.container}>
            <div className={styles['left-items']}>left</div>
            <div className={styles['right-items']}>
                <ul className={styles['header-navigations']}>
                    <li>
                        {/* User Dropdown Menu */}
                        <DropdownMenu
                            label={'Dropdown 1'}
                            CustomMenu={UserIcon}
                            dropdownContainerStyle={{
                                //padding: '15px 0'
                            }}
                        >
                            <ul style={{
                                
                            }}>
                                <li>Item 2</li>
                                <li>Item 1</li>
                                <li>Item 3</li>
                                <li>Item 4</li>
                            </ul>
                        </DropdownMenu>
                    </li>
                    <li>

                        <DropdownMenu
                            CustomMenu={NotificationsIcon}
                        >
                            <ul style={{
                                
                            }}>
                                <li>Notifications 2</li>
                                <li>Notifications 1</li>
                                <li>Notifications 3</li>
                                <li>Notifications 4</li>
                            </ul>
                        </DropdownMenu>
                        
                        
                    </li>
                    <li>
                        {/* User Dropdown Menu */}
                        <DropdownMenu
                            label={'Dropdown 2'}
                            CustomMenu={null}
                            dropdownContainerStyle={{
                                //  padding: '15px 0'
                            }}
                        >
                            <ul style={{
                                listStyle: 'none',
                                padding: '10px',
                                borderRadius: '5px'
                            }}>
                                <li>Item 1</li>
                                <li>Item 1</li>
                                <li>Item 1</li>
                                <li>Item 1</li>
                            </ul>
                        </DropdownMenu>
                    </li>
                    
                </ul>
                
            </div>
        </section>
    );
}

export default Header;