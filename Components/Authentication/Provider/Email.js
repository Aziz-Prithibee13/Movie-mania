import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import SubmitButton from '../../../UI/CustomButtons/SubmitButton';
import DateTimePicker from '@react-native-community/datetimepicker'
import DateBtn from '../../../UI/CustomButtons/DateBtn';
import auth from '../../../firebase.init';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import useNames from '../../../hooks/useNames';

const Email = (props) => {
    const { type } = props

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassWord] = useState('')
    const [mobile, setMobile] = useState('')
    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [mobileError, setMobileError] = useState('')
    const [passError, setPassError] = useState('')
    const [registrationError, setRegistrationError] = useState('')
    const [userNames, setUserNames] = useNames();

    const [
        createUserWithEmailAndPassword,
        emailUser,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [
        signInWithEmailAndPassword,
        signinuser,
        signinloading,
        signinerror,
      ] = useSignInWithEmailAndPassword(auth);

    const [user] = useAuthState(auth)




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

    const nameBlur = (e) => {
        const newName = e.nativeEvent.text

        const cheakNames = userNames.filter(name => name === newName)
        if (cheakNames.length) {
            setNameError('This name already in use. Try new one')
        }
        else if (name === '') {
            setNameError('Provide a name')
        }
        else {
            setName(newName)
        }


    }

    const emailBlur = (e) => {
        const newEmail = e.nativeEvent.text


        if (!/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(newEmail) || email === '') {
            setEmailError('Provide An valid Email')
        }
        else {
            setEmailError('')
        }

        setEmail(newEmail)

    }

    const mobileBlur = (e) => {
        const newMobile = e.nativeEvent.text
        if (newMobile.length !== 11 || mobile === '') {
            setMobileError("Give 11 digit mobile number")
        }
        else {
            setMobileError('')
        }

    }

    const passwordBlur = (e) => {
        const pass = e.nativeEvent.text
        if (pass.length < 8 || !pass) {
            setPassError("Password atleast 8 charecters")
        }
        else {
            setPassError('')

            setPassWord(pass)
        }
    }



    const handleSubmit = () => {

        if (emailError || mobileError || passError || nameError) {
            setRegistrationError('Somthing wrong in given data')
            return
        }
        else {

            createUserWithEmailAndPassword(email, password)

            const userDetailes = {
                name: name,
                email: email,
                mobile: mobile,
                birthDate: date
            }

            fetch('https://movie-mania-server-ruby.vercel.app/user', {
                method: 'PUT',
                headers: {
                    "content-type": 'application/json'
                },
                body: JSON.stringify(userDetailes)
            }).then(data => data.json()).then(res => console.log(res))
        }


    }

    const handleSignIn  = () =>
    {
        console.log(email);
        console.log(password);
        signInWithEmailAndPassword(email,password)
    }


    if (type === 'signup') {
        return (
            <View style={styles.formContainer}>

                <TextInput
                    placeholder="Enter your Name"
                    onEndEditing={nameBlur}
                    style={styles.textInput}
                />
                {nameError ? <Text style={styles.errorMessage}>{nameError}</Text> : <Text style={styles.correctMessage}>Name is correct</Text>}

                <TextInput
                    placeholder="Enter Email"
                    onEndEditing={emailBlur}

                    style={styles.textInput}
                />

                {emailError ? <Text style={styles.errorMessage}>{emailError}</Text> : <Text style={styles.correctMessage}>email is correct</Text>}

                <TextInput
                    placeholder="Enter Your Mobile Number"
                    onEndEditing={mobileBlur}
                    style={styles.textInput}
                />

                {mobileError ? <Text style={styles.errorMessage}>{mobileError}</Text> : <Text style={styles.correctMessage}>Mobile number is correct</Text>}

                <TextInput
                    placeholder="Enter Your Password"
                    onEndEditing={passwordBlur}
                    style={styles.textInput}
                />
                {passError ? <Text style={styles.errorMessage}>{passError}</Text> : <Text style={styles.correctMessage}>Password is correct</Text>}
                <DateBtn press={showDatepicker} styles={styles.textInput} value={date.toLocaleString()}></DateBtn>

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
                {registrationError ? <Text style={styles.errorMessage}>Somting wrong in given data</Text>: null}
            </View>
        );
    }

    else if (type === "signin") {
        return (
            <View style={styles.formContainer}>



                <TextInput
                    placeholder="Enter your email Here"
                    style={styles.textInput}
                    onEndEditing={emailBlur}
                />


                <TextInput
                    placeholder="Enter Your Password"

                    style={styles.textInput}
                    onEndEditing={passwordBlur}
                />


                <SubmitButton press={handleSignIn}>Login</SubmitButton>

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
    },
    errorMessage:
    {
        textAlign: 'center',
        color: '#D21312',
        fontWeight: 'bold',
        fontSize: 15
    },
    correctMessage:
    {
        textAlign: 'center',
        color: '#54B435',
        fontWeight: 'bold',
        fontSize: 15
    }
})