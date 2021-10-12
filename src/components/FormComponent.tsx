import { Input , Button , Form, Select ,DatePicker} from 'antd'
// import {CaretDownOutlined} from '@ant-design/icons';
import { useState } from 'react';
const {Option} = Select;

const FormComponent = () => {
    const [formDetails , setFormDetails] = useState({});
    const [print , setPrint] = useState(false);

    const handleFinish = (values) => {
        // console.log(values);
        setFormDetails(values)
    }
    console.log(formDetails);
    
    const handlePrint = (value) => {
        // console.log(value);
        console.log(print);
        setPrint(!print)
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
                           
                            <Form onFinish={handleFinish}>

                            <div className="sm:flex sm:space-x-4 w-full">
                                <label htmlFor="" className="text-right w-full sm:w-1/3 ">Product:</label><br />
                                <Form.Item  name="product" className="w-full sm:w-1/2"  rules={[{required : true}]}>
                                    <Select className="w-full sm:w-1/2 border border-black" 
                                    placeholder="Select a Product"  
                                    >
                                        <Option value="product 1">Product 1</Option>
                                        <Option value="product 2">Product 2</Option>
                                        <Option value="product 3">Product 3</Option>
                                    </Select>
                                </Form.Item>
                            </div>  

                            <div className="sm:flex sm:space-x-4 w-full ">
                                <label htmlFor="" className="text-right w-1/3">From:</label> <br />
                                <Form.Item name="from" className="w-full sm:w-1/2" rules={[{required : true}]}>
                                <Select className="w-full sm:w-1/2 border border-black" 
                                placeholder="Select a Product"
                                >
                                    <Option value="from1">from 1</Option>
                                    <Option value="from2">from 2</Option>
                                    <Option value="from3">from 3</Option>
                                </Select>
                                </Form.Item>
                            </div>

                            <div className="sm:flex sm:space-x-4 w-full ">
                            <label htmlFor="" className="text-right w-1/3">Strength:</label><br/>
                            <Form.Item name="strength" className="w-full sm:w-1/2" rules={[{required : true}]}>
                                <Select className="w-full sm:w-1/2 border border-black"
                                placeholder="Select a Product"
                                >
                                    <Option value="strength1">Strength 1</Option>
                                    <Option value="strength2">Strength 2</Option>
                                    <Option value="strength3">Strength 3</Option>
                                </Select></Form.Item>
                            </div>

                            <div className="sm:flex sm:space-x-4 w-full ">
                                 <label htmlFor="" className="text-right w-1/3">Flavor:</label>
                                 <Form.Item name="flavor" className="w-full sm:w-1/2">
                                <Select className="w-full sm:w-1/2 border border-black"
                                placeholder="Select a Product"
                                >
                                    <Option value="flavor1">Flavor 1</Option>
                                    <Option value="flavor2">Flavor 2</Option>
                                    <Option value="flavor3">Flavor 3</Option>
                                    <Option value="flavor4">Flavor 4</Option>
                                </Select></Form.Item>
                            </div>        
                            
                            <div className="sm:flex sm:space-x-4 w-full ">
                            <label htmlFor="" className="text-right w-1/3">Units Per Fill:</label>
                            <Form.Item name="unitPerPill" className="w-full sm:w-1/2">
                                <Select className="w-full sm:w-1/2 border border-black"
                                placeholder="Select a Product"
                                >
                                    <Option value="unit1">Unit 1</Option>
                                    <Option value="unit2">Unit 2</Option>
                                    <Option value="unit3">Unit 3</Option>
                                    <Option value="unit4">Unit 4</Option>
                                </Select>
                                </Form.Item>
                            </div>
                              
                            <div className="sm:flex sm:space-x-4 w-full">
                            <label htmlFor="" className="text-right w-1/3">Directions:</label><br />
                                <div className="flex border w-full sm:w-1/2 mb-5 border border-black">
                                <Form.Item name="direction" className="w-full h-2 sm:w-1/2">
                                    <Select className="w-44 sm:w-28 border-r border-black"
                                    placeholder="Directions"
                                    >
                                        <Option value="direction1">Direction 1</Option>
                                        <Option value="direction2">Direction 2</Option>
                                        <Option value="direction3">Direction 3</Option>
                                    </Select>
                                    </Form.Item>
                                    <Form.Item name="directionText" className="h-2 w-full ">
                                        <Input type="text" placeholder="" name="direction" className="w-full "/>
                                    </Form.Item>
                                </div>
                            </div>
                               
                            <div className="sm:flex sm:space-x-4 w-full ">
                            <label htmlFor="" className="text-right w-1/3">Days Supply:</label><br />
                            <Form.Item name="daysSupply" className="w-full sm:w-1/2 ">
                                <Select className="w-full sm:w-1/2 border border-black"
                                placeholder="Select a Product"
                                >
                                    <Option value="1day"> 1 day</Option>
                                    <Option value="2day">2 day</Option>
                                    <Option value="3day">3 day</Option>
                                </Select></Form.Item>
                            </div>
                                
                            <div className="sm:flex sm:space-x-4 w-full ">
                            <label htmlFor="" className="text-right w-1/3">Refills:</label><br />
                            <Form.Item name="refills" className="w-full sm:w-1/2">
                                <Select className="w-full sm:w-1/2 border border-black"
                                placeholder="Select a Product"
                                >
                                    <Option value="refills1">Refills 1</Option>
                                    <Option value="refills2">Refills 2</Option>
                                    <Option value="refills3">Refills 3</Option>
                                </Select></Form.Item>
                            </div>

                            <div className="sm:flex sm:space-x-4 w-full ">
                            <label htmlFor="" className="text-right w-1/3">Expiration:</label><br/>
                            <Form.Item name="expiration" className="w-full sm:w-1/2 border border-black">
                                <DatePicker className="w-full sm:w-full " />
                                </Form.Item>
                            </div>

                            <div className="sm:flex sm:space-x-4 w-full ">
                            <label htmlFor="" className="text-right w-1/3">Client Notification:</label><br />
                                <div className="flex w-full sm:w-1/2 mb-5 border border-black">
                                <Form.Item name="clientNotification" className="w-full h-2 sm:w-1/2 p-0">
                                    <Select className="w-44 sm:w-28 border-r border-black"
                                    placeholder="Today"
                                    >
                                        <Option value="today">Today</Option>
                                        <Option value="tommorow">Tommorow</Option>
                                        <Option value="dayAfter">day after T</Option>
                                    </Select>
                                    </Form.Item>
                                    <Form.Item name="clientNotifyDate" className="h-2 w-full">
                                    <DatePicker className="w-full" />
                                    </Form.Item>
                                </div>
                            </div>   

                                <div className="sm:flex sm:space-x-4 w-full ">
                                    <label htmlFor="" className="text-right w-1/3">AutoShip Promt :</label><br />
                                    <Form.Item name="autoShip" className="w-full sm:w-1/2">
                                    <Select className="w-full sm:w-1/2 border border-black"
                                    placeholder="Select a Product"
                                    >
                                        <Option value="yes">Yes</Option>
                                        <Option value="no">No</Option>
                                    </Select>
                                    </Form.Item>
                                </div>
                                 
                                
                                <div className="sm:flex sm:space-x-4 w-full ">
                                <label htmlFor="" className="text-right w-1/3">Note to Pharmacy:</label>
                                <div className="flex w-full sm:w-1/2 mb-5 border border-black">
                                <Form.Item name="noteToPharmacy" className="w-full h-2 sm:w-1/2">
                                    <Select className=" w-44 sm:w-28 border-r border-black"
                                    placeholder="Directions"
                                    >
                                        <Option value="parmacy1">pharmacy 1</Option>
                                        <Option value="parmacy2">pharmacy 2</Option>
                                        <Option value="parmacy3">pharmacy 3</Option>
                                    </Select>
                                    </Form.Item>
                                    <Form.Item name="pharmacyNote" className="w-full h-2">
                                    <Input type="text" placeholder=""  className="border w-full"/>
                                    </Form.Item>
                                </div>
                                </div>

                                
                            <div className="sm:flex sm:space-x-4 w-full ">
                            <label htmlFor="" className="text-right w-1/3">Note to Client:</label>
                                <div className="flex w-full sm:w-1/2 mb-5 border border-black">
                                <Form.Item name="noteToClient" className="w-full h-2 sm:w-1/2">
                                    <Select className="w-44 sm:w-28 border-r border-black"
                                    placeholder="Directions"
                                    >
                                        <Option value="client1">Client 1</Option>
                                        <Option value="client2">Client 2</Option>
                                        <Option value="client3">Client 3</Option>
                                        <Option value="client4">Client 4</Option>
                                    </Select>
                                    </Form.Item>
                                    <Form.Item name="clientNote" className="w-full h-2">
                                    <Input type="text" placeholder=""  className="border w-full"/>
                                    </Form.Item>
                                </div>
                            </div>
                                
                            <div className="sm:flex sm:space-x-4 w-full ">
                            <label htmlFor="" className="text-right w-1/3">Authorizing Vet:</label>
                                <div className="w-full sm:w-1/2 mb-5 ">
                                <Form.Item name="authorizingVet" className="sm:w-full" rules={[{required : true}]}>
                                <Select className="w-full border border-black"
                                placeholder="Select a Product"
                                >
                                    <Option value="yes">Yes</Option>
                                    <Option value="no">No</Option>
                                </Select>
                                </Form.Item>
                                <p className="text-xs tracking-tighter text-right">This is my eSignature and implies i have valid VCPR as definedbt the AVMA.</p>
                                </div>
                            </div>

                            <div className="sm:flex sm:space-x-4 w-full ">
                            <label htmlFor="" className="text-right w-1/3"></label>
                                <div className="w-full sm:w-1/2 ">
                                    <div className="flex items-center justify-end">
                                        <p className="mb-0">Print Rx Details after Authorizing</p>
                                        <div onClick={handlePrint} className="border bg-green-800 text-white text-xl text-center font-bold w-6 h-6 ml-2">{ print && <i className="fas fa-check"></i>}</div> 
                                    </div>
                                </div>

                            </div>

                            <div className="flex space-x-4 w-full mt-3">
                            <label htmlFor="" className="text-right w-1/3 hidden sm:block"></label><br />
                                <div className="w-full sm:w-1/2 ">
                                    <div className="text-center flex justify-end space-x-6">
                                        <Button htmlType="submit" style={{borderRadius: '20px'}} className="rounded-full py-1 border-2 border-black text-black text-center px-5 ">Save Draft</Button>
                                        <Button htmlType="submit" style={{borderRadius: '20px' , backgroundColor: 'black' , color:'white'}} className="rounded-full py-1 border-2 border-black bg-black text-white text-center px-5">Authorize</Button>
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
