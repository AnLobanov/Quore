import React from 'react';
import styled from 'styled-components/native';
import Svg, { SvgXml } from 'react-native-svg';

export const navBtn = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="14" viewBox="0 0 28 14" fill="none">
<path d="M0 1.4C0 1.0287 0.1475 0.672602 0.41005 0.410051C0.672601 0.1475 1.0287 0 1.4 0H26.6C26.9713 0 27.3274 0.1475 27.59 0.410051C27.8525 0.672602 28 1.0287 28 1.4C28 1.7713 27.8525 2.1274 27.59 2.38995C27.3274 2.6525 26.9713 2.8 26.6 2.8H1.4C1.0287 2.8 0.672601 2.6525 0.41005 2.38995C0.1475 2.1274 0 1.7713 0 1.4ZM0 7C0 6.6287 0.1475 6.2726 0.41005 6.01005C0.672601 5.7475 1.0287 5.6 1.4 5.6H26.6C26.9713 5.6 27.3274 5.7475 27.59 6.01005C27.8525 6.2726 28 6.6287 28 7C28 7.3713 27.8525 7.7274 27.59 7.98995C27.3274 8.2525 26.9713 8.4 26.6 8.4H1.4C1.0287 8.4 0.672601 8.2525 0.41005 7.98995C0.1475 7.7274 0 7.3713 0 7ZM1.4 11.2C1.0287 11.2 0.672601 11.3475 0.41005 11.6101C0.1475 11.8726 0 12.2287 0 12.6C0 12.9713 0.1475 13.3274 0.41005 13.59C0.672601 13.8525 1.0287 14 1.4 14H18.2C18.5713 14 18.9274 13.8525 19.1899 13.59C19.4525 13.3274 19.6 12.9713 19.6 12.6C19.6 12.2287 19.4525 11.8726 19.1899 11.6101C18.9274 11.3475 18.5713 11.2 18.2 11.2H1.4Z" fill="white"/>
</svg>`;

const Button = styled.Pressable`
  margin-top: 28px;
`;

export default function SideButton({ onPressed }) {
  return (
    <Button onPress={onPressed}>
      <Svg height="100%" width="100%" viewBox="0 0 100 100">
        <SvgXml xml={navBtn} width="65px" height="65px" />
      </Svg>
    </Button>
  );
}
