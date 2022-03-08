import React from 'react';
import Layout from './src/components/Layout/Layout';
import './src/styles/global.scss'

export const wrapPageElement = ({ element, props }) => (
    <Layout {...props}>{element}</Layout>
)