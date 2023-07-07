import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import SubmitButton from '../../../UI/CustomButtons/SubmitButton';
import DateTimePicker from '@react-native-community/datetimepicker'
import DateBtn from '../../../UI/CustomButtons/DateBtn';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Email = (props) => {
    const { type } = props

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassWord] = useState(null)
    const [mobile, setMobile] = useState(null)
    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [mobileError, setMobileError] = useState('')
    const [passError, setPassError] = useState('')
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const nameBlur=(e)=>
    {
        
        setName(e.nativeEvent.text)
        
    }

    const emailBlur=(e)=>
    {
        setEmail(e.nativeEvent.text)
    }

    const mobileBlur=(e)=>
    {
        
        setMobile(e.nativeEvent.text)

    }

    const passwordBlur=(e)=>
    {
        setPassWord(e.nativeEvent.text)
    }

    if(user)
    {
        console.log(user);
    }


    const handleSubmit = () =>
    {/* 
        createUserWithEmailAndPassword(email, password) */
        console.log('pressed');
    }


    if (type === 'signup') {
        return (
            <View style={styles.formContainer}>

                <TextInput
                    placeholder="Enter your Name"
                    onEndEditing={nameBlur}
                    style={styles.textInput}
                />

                <TextInput
                    placeholder="Enter Email"
                    onEndEditing={emailBlur}

                    style={styles.textInput}
                />

                <TextInput
                    placeholder="Enter Your Mobile Number"
                    onEndEditing={mobileBlur}
                    style={styles.textInput}
                />

                <TextInput
                    placeholder="Enter Your Password"
                    onEndEditing={passwordBlur}
                    style={styles.textInput}
                />
                <DateBtn press={showDatepicker} styles = {styles.textInput} value={date.toLocaleString()}></DateBtn>

                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        onChange={onChange}
        
                    />
                )}




                <SubmitButton press={handleSubmit}>Sign Up</SubmitButton>
            </View>
        );
    }

    else if (type === "signin") {
        return (
            <View style={styles.formContainer}>



                <TextInput
                    placeholder="Enter your email Here"
                    style={styles.textInput}
                />


                <TextInput
                    placeholder="Enter Your Password"

                    style={styles.textInput}
                />


                <SubmitButton>Login</SubmitButton>

            </View>
        );
    }

};

export default Email;


const styles = StyleSheet.create({
    formContainer: {
        elevation: 10,
        padding: "10%"
    },
    textInput: {
        borderBottomColor: 'black',
        borderBottomWidth: 3,
        margin: 20
    }
})