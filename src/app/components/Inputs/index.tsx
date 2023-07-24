import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Input, Icon, Pressable} from 'native-base';
import EyeIcon from '../../../assets/icons/eye.svg';
import EyeSlashIcon from '../../../assets/icons/eye-slash.svg';

interface IPasswordInputProps {
  placeholder?: string;
  value: string;
  onChangeText: (value: string) => void;
  onBlur?: any;
  isInvalid?: boolean;
}

const PasswordInput = ({
  placeholder,
  value,
  onChangeText,
  onBlur,
  isInvalid,
}: IPasswordInputProps) => {
  const [show, setShow] = useState(false);

  const iconProps = {
    color: 'red',
    size: '20px',
  };

  return (
    <Input
      autoCapitalize="none"
      isInvalid={isInvalid || false}
      placeholder={placeholder || 'Password'}
      type={show ? 'password' : 'text'}
      InputRightElement={
        <Pressable onPress={() => setShow(!show)}>
          <Icon
            {...iconProps}
            as={show ? <EyeSlashIcon /> : <EyeIcon />}
            style={styles.inputRightIcon}
          />
        </Pressable>
      }
      value={value}
      onChangeText={onChangeText}
      onBlur={onBlur}
    />
  );
};

const styles = StyleSheet.create({
  inputIcon: {
    marginLeft: 18,
    marginRight: 2,
  },
  inputRightIcon: {
    marginLeft: 2,
    marginRight: 18,
  },
});

export default PasswordInput;
