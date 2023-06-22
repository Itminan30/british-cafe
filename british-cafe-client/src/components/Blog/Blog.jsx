import { Accordion, Button } from 'flowbite-react';
import React from 'react';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import BlogTexts from '../BlogTexts/BlogTexts';

const Blog = () => {
    return (
        <div>
            <h2 className='text-center font-bold text-5xl my-10'>Blog Page</h2>
            <div className='w-11/12 lg:w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16'>
                <div className='border p-5 rounded-md h-fit'>
                    <h2 className='text-3xl font-bold text-center mb-5'>PDF View</h2>
                    <PDFViewer className='h-96 mx-auto my-5 border-2 rounded-lg'>
                        <BlogTexts></BlogTexts>
                    </PDFViewer>
                    <PDFDownloadLink document={<BlogTexts></BlogTexts>} fileName='Blog'>
                        {({ loading }) => (loading ?
                            <Button color="grey">Loading Document</Button> : 
                            <Button className='mx-auto mt-5' color="failure">Download PDF</Button>)}
                    </PDFDownloadLink>
                </div>

                <div className='border p-5 rounded-md'>
                    <h2 className='text-3xl font-bold text-center mb-5'>Component View</h2>
                    <BlogTexts></BlogTexts>
                </div>
            </div>

        </div>
    );
};

export default Blog;