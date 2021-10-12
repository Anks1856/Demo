import { Dropdown, Menu , Button , Form, Select ,DatePicker} from 'antd'
import {CaretDownOutlined} from '@ant-design/icons';
import { useState } from 'react';
const {Option} = Select;

const FormComponent = () => {
    const [formDetails , setFormDetails] = useState({});

    // const handleChange = (field, value) =>{
    //     // setFormDetails({
    //     //     [] : value
    //     // })
    //     console.log(field ,value);

    // }
    const handleFinish = (values) => {
        console.log(values);
        
    }

    return (
        <div className="container mx-auto mt-10">
            <div className="m-4 p-4 shadow-lg rounded-xl ">
                {/* main heading */}
                <div>
                    <p className="text-center text-xl  sm:text-3xl font-bold bg-blue-200 my-2 py-4 shadow-sm rounded-lg">This is Heading</p>
                </div>

                
                <div className="sm:flex sm:w-full justify-between sm:space-x-4 my-4 capitalize">
                    <div className="shadow-xl p-4 w-full rounded-lg border">
                        <p className="text-xl font-semibold p-4">Prescription</p>
                        <div className=" text-lg font-semibold p-4 sm:p-0">
                            {/* <div className="grid-cols-2 gap-3"> */}
                           
                            <Form onFinish={handleFinish}>
                            <div className="sm:flex sm:space-x-4 w-full">
                                <Form.Item  name="product">
                                <label htmlFor="" className="text-right w-full sm:w-1/3 ">Product:</label><br />
                                <Select name="product" className="w-full sm:w-1/2" 
                                placeholder="Select a Product" 
                                >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                                </Form.Item>
                            </div>
                            <div className="sm:flex sm:space-x-4 w-full mt-3">
                                <Form.Item name="from">
                                <label htmlFor="" className="text-right w-1/3">From:</label> <br />
                                <Select className="w-full sm:w-1/2" 
                                placeholder="Select a Product"
                                >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                                </Form.Item>
                            </div>

                            <div className="sm:flex sm:space-x-4 w-full mt-3">
                            <label htmlFor="" className="text-right w-1/3">Strength:</label><br/>
                                <Select className="w-full sm:w-1/2"
                                placeholder="Select a Product"
                                >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                            </div>

                            <div className="sm:flex sm:space-x-4 w-full mt-3">
                                 <label htmlFor="" className="text-right w-1/3">Flavor:</label>
                                <Select className="w-full sm:w-1/2"
                                placeholder="Select a Product"
                                >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                            </div>        
                            
                            <div className="sm:flex sm:space-x-4 w-full mt-3">
                            <label htmlFor="" className="text-right w-1/3">Units Per Fill:</label>
                                <Select className="w-full sm:w-1/2"
                                placeholder="Select a Product"
                                >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                            </div>
                              
                            <div className="sm:flex sm:space-x-4 w-full mt-3">
                            <label htmlFor="" className="text-right w-1/3">Directions:</label><br />
                                <div className="flex border w-full sm:w-1/2">
                                    <Select className="w-44 sm:w-28"
                                    placeholder="Directions"
                                    >
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="tom">Tom</Option>
                                    </Select>
                                    <input type="text" placeholder=""  className="border w-full"/>
                                </div>
                            </div>
                               
                            <div className="sm:flex sm:space-x-4 w-full mt-3">
                            <label htmlFor="" className="text-right w-1/3">Days Supply:</label><br />
                                <Select className="w-full sm:w-1/2"
                                placeholder="Select a Product"
                                >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                            </div>
                                
                            <div className="sm:flex sm:space-x-4 w-full mt-3">
                            <label htmlFor="" className="text-right w-1/3">Refills:</label><br />
                                <Select className="w-full sm:w-1/2"
                                placeholder="Select a Product"
                                >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                            </div>

                            <div className="sm:flex sm:space-x-4 w-full mt-3">
                            <label htmlFor="" className="text-right w-1/3">Expiration:</label><br/>
                                <DatePicker className="w-full sm:w-1/2" />
                            </div>

                            <div className="sm:flex sm:space-x-4 w-full mt-3">
                            <label htmlFor="" className="text-right w-1/3">Client Notification:</label><br />
                                <div className="flex border w-full sm:w-1/2">
                                    <Select className="w-44 sm:w-28"
                                    placeholder="Today"
                                    >
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="tom">Tom</Option>
                                    </Select>
                                    <DatePicker className="w-full" />
                                </div>
                            </div>   

                                <div className="sm:flex sm:space-x-4 w-full mt-3">
                                    <label htmlFor="" className="text-right w-1/3">AutoShip Promt :</label><br />
                                    <Select className="w-full sm:w-1/2"
                                    placeholder="Select a Product"
                                    >
                                        <Option value="jack">Yes</Option>
                                        <Option value="lucy">No</Option>
                                    </Select>
                                </div>
                                 
                                
                                <div className="sm:flex sm:space-x-4 w-full mt-3">
                                <label htmlFor="" className="text-right w-1/3">Note to Pharmacy:</label>
                                <div className="flex border w-full sm:w-1/2">
                                    <Select className=" w-44 sm:w-28"
                                    placeholder="Directions"
                                    >
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="tom">Tom</Option>
                                    </Select>
                                    <input type="text" placeholder=""  className="border w-full"/>
                                </div>
                                </div>

                                
                            <div className="sm:flex sm:space-x-4 w-full mt-3">
                            <label htmlFor="" className="text-right w-1/3">Note to Client:</label>
                                <div className="flex border w-full sm:w-1/2">
                                    <Select className="w-44 sm:w-28"
                                    placeholder="Directions"
                                    >
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="tom">Tom</Option>
                                    </Select>
                                    <input type="text" placeholder=""  className="border w-full"/>
                                </div>
                            </div>
                                
                            <div className="sm:flex sm:space-x-4 w-full mt-3">
                            <label htmlFor="" className="text-right w-1/3">Authorizing Vet:</label>
                                <div className="w-full sm:w-1/2">
                                <Select className="w-full"
                                placeholder="Select a Product"
                                >
                                    <Option value="jack">Yes</Option>
                                    <Option value="lucy">No</Option>
                                </Select>
                                <p className="text-xs tracking-tighter text-right">This is my eSignature and implies i have valid VCPR as definedbt the AVMA.</p>
                                </div>
                            </div>

                            <div className="sm:flex sm:space-x-4 w-full mt-3">
                            <label htmlFor="" className="text-right w-1/3"></label>
                                <div className="w-full sm:w-1/2 ">
                                    <div className="flex items-center justify-end">
                                        <p className="mb-0">Print Rx Details after Authorizing</p>
                                        <div className="border bg-green-800 text-white text-xl text-center font-bold w-6 h-6 ml-2"><i className="fas fa-check"></i></div> 
                                    </div>
                                </div>

                            </div>

                            <div className="flex space-x-4 w-full mt-3">
                            <label htmlFor="" className="text-right w-1/3 hidden sm:block"></label><br />
                                <div className="w-full sm:w-1/2 ">
                                    <div className="text-center flex justify-end  space-x-6">
                                        <Button htmlType="submit" className="rounded-full py-1 border-2 border-black text-black text-center px-5 ">Save Draft</Button>
                                        <Button className="rounded-full py-1 border-2 border-black bg-black text-white text-center px-5">Authorize</Button>
                                    </div>
                                </div>
                            </div>
                            
                        </Form>
                        </div>
                    </div>
                   
                    <div className="shadow-xl p-4 w-full sm:w-2/3 rounded-lg border my-4 sm:my-0">
                        <p className="text-xl font-semibold">Product Details</p>
                        <div className="">
                            <p className="uppercase text-md font-semibold mb-0">Methocarbamol</p>
                            <p className="uppercase text-md leading-none mb-0">oral suspension</p>
                            <p className="uppercase text-sm mb-0">100mg/ml</p>
                        </div>
                        <div className="flex my-8 space-x-4">
                            <div className="w-28 h-28 shadow-2xl rounded-lg"><img src="/medicine.jpg" className="w-28 h-28 rounded-lg" alt="" /></div>   
                            <div>
                                <div className="flex space-x-2">
                                    <div className="flex items-center">
                                        <div className=""><i className="fas fa-calendar-alt fa-xl"></i></div>
                                    </div>
                                    <div>
                                        <div className="m-0 text-lg font-semibold">220 days</div>
                                        <div className="m-0 text-sm">max self life</div>
                                    </div>
                                </div>

                                <div className="mt-2">
                                    <div className="flex space-x-2">
                                    <div className="flex items-center">
                                        <div className=""><i className="fas fa-truck fa-xl"></i></div>
                                    </div>
                                    <div>
                                        <div className="m-0 text-lg font-semibold">1 - 2 days</div>
                                        <div className="m-0 text-sm">delivery time</div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="w-full my-2">
                            {/* <label>Description</label> */}
                            <select className="w-full text-center font-semibold text-lg shadow-xl p-2 my-2 rounded">
                                <option value="">Description </option>
                                <option value="">Description 2</option>
                                <option value="">Description 3</option>
                                <option value="">Description 4</option>
                            </select>
                        </div>
                        <div className="w-full my-2">
                            {/* <label>Description</label> */}
                            <select className="w-full text-center font-semibold text-lg shadow-xl p-2 my-2 rounded">
                                <option value="">Prescribing Details </option>
                                <option value="">Description 2</option>
                                <option value="">Description 3</option>
                                <option value="">Description 4</option>
                            </select>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default FormComponent
