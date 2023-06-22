import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
    },
    author: {
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 40,
    },
    subtitle: {
        fontSize: 18,
        margin: 12,
        fontWeight: 700
    },
    text: {
        margin: 12,
        fontSize: 20,
        textAlign: 'justify',
        fontFamily: 'Times-Roman'
    },
    image: {
        marginVertical: 15,
        marginHorizontal: 100,
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: 'center',
        color: 'grey',
    },
    pageNumber: {
        position: 'absolute',
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey',
    },
});

const PDFFile = () => {
    return (
        <Document>
            <Page style={styles.body}>
                <Text style={styles.title}>Blog</Text>
                <Text style={styles.subtitle}>
                    <br /> Tell us the differences between uncontrolled and controlled components. <br />
                </Text>
                <Text style={styles.text}>
                    In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.
                </Text>
                <Text style={styles.subtitle}>
                    <br /> How to validate React props using PropTypes <br />
                </Text>
                <Text style={styles.text}>
                    PropTypes are simply a mechanism that ensures that the passed value is of the correct datatype. This makes sure that we don't receive an error at the very end of our app by the console which might not be easy to deal with.
                </Text>
                <Text style={styles.subtitle}>
                    <br /> Tell us the difference between nodejs and express js. <br />
                </Text>
                <Text style={styles.text}>
                    Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications".
                </Text>
                <Text style={styles.subtitle}>
                    <br /> What is a custom hook, and why will you create a custom hook? <br />
                </Text>
                <Text style={styles.text}>
                    Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.
                </Text>
            </Page>
        </Document>
    );
};

export default PDFFile;