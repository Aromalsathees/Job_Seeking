
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/ui/alert-dialog";

const Jobtitles = () => {
  const { id } = useParams();
  const [dataset, setdata] = useState([]);

  const [dataForm, setDataForm] = useState({
    username: '',
    email: '',
    number: '',
    image: null,
  });

  // Load job title data
  useEffect(() => {
    axios.get(`http://localhost:8000/job_titles/${id}/`).then(response => {
      setdata(response.data);
    }).catch(error => {
      console.error('fetching the error:', error);
    });
  }, [id]);

  // Load temp user info from localStorage to prefill form
  useEffect(() => {
    const savedUser = localStorage.getItem('tempUser');
    if (savedUser) {
      setDataForm(prev => ({
        ...prev,
        ...JSON.parse(savedUser),
      }));
    }
  }, []);

  // Form submit handler
  const onSubmit = () => {
    if (!dataForm.username.trim()) {
      alert("Please enter your username before applying");
      return;
    }

    const formData = new FormData();
    formData.append('jobname', id);
    formData.append('username', dataForm.username);
    formData.append('email', dataForm.email);
    formData.append('number', dataForm.number);

    if (dataForm.image) {
      formData.append('image', dataForm.image);
    }

    axios.post('http://localhost:8000/applicant_details/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
        console.log('Submitted:', response.data);
        // Save temp user info locally
        localStorage.setItem('tempUser', JSON.stringify({
          username: dataForm.username,
          email: dataForm.email,
          number: dataForm.number,
        }));
        alert('Job application submitted successfully!');
      })
      .catch((error) => {
        console.error('Submission error:', error.response?.data || error.message);
      });
  };

  // Input change handler
  const onChange = (e) => {
    const { name, type, value, files } = e.target;
    setDataForm((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  // Get temp user to show login status
  const tempUser = JSON.parse(localStorage.getItem('tempUser') || '{}');

  return (
    <div className='lg:w-screen w-[300px] h-full bg-white'>

      {/* Show logged in username */}
      <div className="p-3 text-center font-semibold">
        {tempUser.username ? (
          <p>Logged in as: <strong>{tempUser.username}</strong></p>
        ) : (
          <p>You are not logged in. Please apply to login temporarily.</p>
        )}
      </div>

      {/* Heading starts here */}
      <div className='justify-center items-center text-black pt-30'>
        <p className='text-center whitespace-nowrap font-bold text-4xl lg:text-6xl ml-8'>{dataset.jobtitle}</p>
        <div className='flex justify-center items-center lg:mt-5 lg:gap-3 mt-2 ml-12 gap-1'>
          <span className="material-symbols-outlined">settings</span>
          <p className='font-bold lg:text-2xl text-sm '>Tech Crop</p>
        </div>
        <div className='flex justify-center items-center lg:gap-8 gap-4 mt-5 ml-15'>
          <button className='bg-green-400 lg:mt-6 lg:w-40  mt-2 rounded-md text-white'>Save Job</button>
          {/* 
          SIDE BARS STARTS HERE */}
          <Sheet>
            <SheetTrigger className="border shadow-sm mt-2 lg:mt-6 rounded-md px-4 py-2 font-semibold bg-blue-400 text-white lg:w-40  ">
              Apply Now
            </SheetTrigger>

            <SheetContent>
              <SheetHeader>
                <SheetTitle className="mt-5 text-2xl font-bold">Apply for Job</SheetTitle>

                <SheetDescription>
                  <form className="space-y-6 mt-8" onSubmit={e => e.preventDefault()}>
                    {/* Username */}
                    <div className="flex flex-col">
                      <label htmlFor="username" className="font-semibold text-lg">Username</label>
                      <input
                        id="username"
                        type="text"
                        name="username"
                        value={dataForm.username}
                        onChange={onChange}
                        placeholder="username..."
                        className="border rounded-md p-2 mt-1"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                      <label htmlFor="email" className="font-semibold text-lg">Email</label>
                      <input
                        id="email"
                        name="email"
                        value={dataForm.email}
                        onChange={onChange}
                        type="email"
                        placeholder="@aromal123gmail.com"
                        className="border rounded-md p-2 mt-1"
                      />
                    </div>

                    {/* Document Upload */}
                    <div className="flex flex-col">
                      <label htmlFor="document" className="font-semibold text-lg">Document</label>
                      <input
                        id="document"
                        name="image"
                        onChange={onChange}
                        type="file"
                        className="border rounded-md p-2 mt-1"
                      />
                    </div>

                    {/* Mobile */}
                    <div className="flex flex-col">
                      <label htmlFor="number" className="font-semibold text-lg">Mobile</label>
                      <input
                        id="number"
                        name="number"
                        value={dataForm.number}
                        onChange={onChange}
                        type="text"
                        placeholder="91+..."
                        className="border rounded-md p-2 mt-1"
                      />
                    </div>

                    {/* Submit Confirmation */}
                    <AlertDialog>
                      <AlertDialogTrigger className="bg-green-500 text-white font-semibold rounded-md px-4 py-2 mt-4">
                        Submit
                      </AlertDialogTrigger>

                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This action will send your application data. You won’t be able to undo this.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction onClick={onSubmit}>Confirm</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </form>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          {/* SIDE BARS ENDS HERE */}
        </div>
      </div>
      {/* Heading ends here */}

      {/* TWO BOXES STARTS HERE */}
      <div className='w-screen bg-white text-black mt-15 lg:mb-10 mb-10 border'>
        <div className='p-5 space-y-2 border rounded-md lg:ml-10 lg:mr-20 lg:mt-10 mt-5 ml-1 mr-1'>
          <p className='lg:text-4xl lg:font-bold text-lg font-semibold'>Job Description</p>
          <p>orem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s,It is a long established fact that a reader will be distracted
            by the readable content of a page when looking at its layout.
            The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English It is a long established fact
            that a reader will be distracted by the readable content of a
            page when looking at its layout. The point of using Lorem Ipsum
            is that it has a more-or-less normal distribution of letters,
            as opposed to using 'Content here, content here', making it look
            like readable English
          </p>
        </div>

        <div className='p-5 space-y-2 border rounded-md lg:ml-10 lg:mr-20 lg:mt-10 mt-5 ml-1 mr-1'>
          <p className='lg:text-4xl lg:font-bold text-lg font-semibold'>Requirments</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 lg:mt-5">
            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
            <li>It has been used as standard dummy text in the industry for centuries.</li>
            <li>Its origins date back to the 1500s, making it a historically significant placeholder.</li>
            <li>Despite being nonsensical, Lorem Ipsum remains widely used in design and publishing.</li>
          </ul>
        </div>
      </div>
      {/* TWO BOXES ENDS HERE */}
    </div>
  );
};

export default Jobtitles;
