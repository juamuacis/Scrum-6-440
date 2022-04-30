import React from 'react'
import classes from './ProfileInformation.module.css';
import Card from '../ui/Card';



const ProfileInformation = (props) =>{
    return (
                <li className = {classes.item}>
                    <Card>
                    <div className = {classes.content}>
                        <h3>{props.accountEmail}</h3>
                        <h3>{props.accountFirstName}</h3>
                        <h3>{props.accountLastName}</h3>
                    </div>
                    </Card>
                </li>
            );
        }
        

export default ProfileInformation