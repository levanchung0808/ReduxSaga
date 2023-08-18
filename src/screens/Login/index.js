import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLoginAction } from '../../actions';
import md5 from 'md5';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(true);

    const dispatch = useDispatch();
    const loginReducers = useSelector(state => state.loginReducers);

    const handleLogin = async () => {
        const pw = md5(password);
        await dispatch(fetchLoginAction({username, pw, machine_id: '' }));
        console.log('User: ', loginReducers);
        //console.log('user', loginReducers.data.data.full_name);
    };

    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 1, backgroundColor: 'white', marginTop: 50, paddingHorizontal: 50 }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 30 }}>
                    <View style={{ height: 1, backgroundColor: 'black', flex: 1 }}></View>
                    <Image style={{ width: 50, height: 57, marginHorizontal: 10 }} source={require('../../assets/images/logo.png')}></Image>
                    <View style={{ height: 1, backgroundColor: 'black', flex: 1 }}></View>
                </View>

                <View>
                    <Text style={{ fontWeight: 'bold', color: 'grey', fontSize: 25, }} >Hello !</Text>
                    <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 20, }} >WELCOME BACK</Text>

                    <View style={{}}>
                        <Text style={{ color: 'black', fontWeight: '800', fontSize: 16, marginTop: 40 }}>Username</Text>
                        <TextInput
                            value={username}
                            onChangeText={setUsername}
                            placeholder="Enter your username"
                            style={{}} />
                        <View style={{ height: 1, backgroundColor: 'black', }} ></View>
                    </View>

                    <View style={{ position: 'relative' }}>
                        <Text style={{ color: 'black', fontWeight: '800', fontSize: 16, marginTop: 20 }}>Password</Text>
                        <TextInput
                            value={password}
                            onChangeText={setPassword}
                            placeholder="Enter your password"
                            style={{}}
                            secureTextEntry={isShowPassword} />
                        {
                            !isShowPassword ?
                                <TouchableOpacity onPress={() => setIsShowPassword(true)} style={{ position: 'absolute', right: 0, top: 55 }}>
                                    <Image
                                        style={{ width: 24, height: 24 }}
                                        source={require('../../assets/images/eye.png')}
                                    />
                                </TouchableOpacity> :
                                <TouchableOpacity onPress={() => setIsShowPassword(false)} style={{ position: 'absolute', right: 0, top: 55 }}>
                                    <Image
                                        style={{ width: 24, height: 24 }}
                                        source={require('../../assets/images/eye-off.png')}
                                    />
                                </TouchableOpacity>
                        }
                        <View style={{ height: 1, backgroundColor: 'black', marginBottom: 20 }} ></View>
                    </View>

                    <TouchableOpacity style={styles.btn} onPress={() => handleLogin()}>
                        <Text style={{ color: '#ffffff', textAlign: 'center', fontWeight: 'bold' }} >Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => { }}>
                        <Image style={{ width: 20, height: 20, marginRight: 10 }} source={require('../../assets/images/google.png')}></Image>
                        <Text style={{ color: '#ffffff', textAlign: 'center', fontWeight: 'bold' }} >Login By Google</Text>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Text style={{ color: 'black', fontWeight: '600', textAlign: 'center' }}>Do you have account ? </Text>
                        <Text
                            style={{ color: 'black', fontWeight: '600', textAlign: 'center', marginLeft: 4, textDecorationLine: 'underline' }}
                            onPress={() => navigation.navigate('Register')} >
                            Signup
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => { }}>
                        <Text style={{ color: 'black', fontWeight: '600', textAlign: 'center', marginTop: 8, textDecorationLine: 'underline' }}>
                            Forgot password
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
        </ScrollView>
    )
}

export default Login;

const styles = StyleSheet.create({
    btn: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: 'black',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8
    }
})