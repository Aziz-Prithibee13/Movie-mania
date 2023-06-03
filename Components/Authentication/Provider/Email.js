import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import SubmitButton from '../../../UI/CustomButtons/SubmitButton';

const Email = (props) => {
    const { type } = props

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            birthdate: '',
            mobile: ''
        }
    });
    const onSubmit = data => console.log(data);
    if (type === 'signup') {
        return (
            <View style={styles.formContainer}>


                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="Enter your Name"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            style={styles.textInput}
                        />
                    )}
                    name="name"
                />
                {errors.name && <Text>This is required.</Text>}

                <Controller
                    control={control}
                    rules={{
                        maxLength: 100,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="Enter Email"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}

                            style={styles.textInput}
                        />
                    )}
                    name="email"
                />

                <Controller
                    control={control}
                    rules={{
                        maxLength: 11,
                        minLength: 11,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="Enter Your Mobile Number"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}

                            style={styles.textInput}
                        />
                    )}
                    name="mobile"
                />

                <Controller
                    control={control}
                    rules={{
                        minLength: 16,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="Enter Your Password"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}

                            style={styles.textInput}
                        />
                    )}
                    name="password"
                />



                <SubmitButton>Sign Up</SubmitButton>
            </View>
        );
    }

    else if (type === "signin") {
        return (
            <View style={styles.formContainer}>


                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="Enter your email Here"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            style={styles.textInput}
                        />
                    )}
                    name="email"
                />
                {errors.name && <Text>This is required.</Text>}

                <Controller
                    control={control}
                    rules={{
                        maxLength: 100,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="Enter Your Password"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}

                            style={styles.textInput}
                        />
                    )}
                    name="email"
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