import { Dropdown, Menu , Button , Select ,DatePicker} from 'antd'
import {CaretDownOutlined} from '@ant-design/icons';
const {Option} = Select;

const Form = () => {
    const menu = (
        <Menu >
          <Menu.Item key="1" >
            1st menu item
          </Menu.Item>
          <Menu.Item key="2" >
            2nd menu item
          </Menu.Item>
          <Menu.Item key="3" >
            3rd menu item
          </Menu.Item>
        </Menu>
      );
    return (
        <div className="container mx-auto mt-10">
            <div className="m-4 p-4 shadow-lg rounded-xl ">
                {/* main heading */}
                <div>
                    <p className="text-center text-xl  sm:text-3xl font-bold bg-blue-200 my-2 py-4 shadow-sm rounded-lg">This is Heading</p>
                </div>

                {/* form */}
                <div className="sm:flex sm:w-full justify-between sm:space-x-4 my-4 capitalize">
                    <div className="shadow-xl p-4 w-full rounded-lg border">
                        <p className="text-xl font-semibold p-4">Prescription</p>
                        <div className=" text-lg font-semibold ">
                            {/* <div className="grid-cols-2 gap-3"> */}
                            <div className="sm:flex space-x-4 w-full">
                                <label htmlFor="" className="text-left sm:text-right w-1/3 ">Product:</label><br />
                                <Select className="sm:w-1/2"
                                placeholder="Select a Product"
                                >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                            </div>
                            <div className="flex space-x-4 w-full mt-3">
                                <label htmlFor="" className="text-right w-1/3">From:</label>
                                <Select className="w-1/2"
                                placeholder="Select a Product"
                                >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                            </div>

                            <div className="flex space-x-4 w-full mt-3">
                            <label htmlFor="" className="text-right w-1/3">Strength:</label>
                                <Select className="w-1/2"
                                placeholder="Select a Product"
                                >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                            </div>

                            <div className="flex space-x-4 w-full mt-3">
                                 <label htmlFor="" className="text-right w-1/3">Flavor:</label>
                                <Select className="w-1/2"
                                placeholder="Select a Product"
                                >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                            </div>        
                            
                            <div className="flex space-x-4 w-full mt-3">
                            <label htmlFor="" className="text-right w-1/3">Units Per Fill:</label>
                                <Select className="w-1/2"
                                placeholder="Select a Product"
                                >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                            </div>
                              
                            <div className="flex space-x-4 w-full mt-3">
                            <label htmlFor="" className="text-right w-1/3">Directions:</label>
                                <div className="flex border w-1/2">
                                    <Select className="w-28"
                                    placeholder="Directions"
                                    >
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="tom">Tom</Option>
                                    </Select>
                                    <input type="text" placeholder=""  className="border w-full"/>
                                </div>
                            </div>
                               
                            <div className="flex space-x-4 w-full mt-3">
                            <label htmlFor="" className="text-right w-1/3">Days Supply:</label>
                                <Select className="w-1/2"
                                placeholder="Select a Product"
                                >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                            </div>
                                
                            <div className="flex space-x-4 w-full mt-3">
                            <label htmlFor="" className="text-right w-1/3">Refills:</label>
                                <Select className="w-1/2"
                                placeholder="Select a Product"
                                >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                            </div>

                            <div className="flex space-x-4 w-full mt-3">
                            <label htmlFor="" className="text-right w-1/3">Expiration:</label>
                                <DatePicker className="w-1/2" />
                            </div>

                            <div className="flex space-x-4 w-full mt-3">
                            <label htmlFor="" className="text-right w-1/3">Client Notification:</label>
                                <div className="flex border w-1/2">
                                    <Select className="w-28"
                                    placeholder="Today"
                                    >
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="tom">Tom</Option>
                                    </Select>
                                    <DatePicker className="w-full" />
                                </div>
                            </div>   

                                <div className="flex space-x-4 w-full mt-3">
                                    <label htmlFor="" className="text-right w-1/3">AutoShip Promt :</label>
                                    <Select className="w-1/2"
                                    placeholder="Select a Product"
                                    >
                                        <Option value="jack">Yes</Option>
                                        <Option value="lucy">No</Option>
                                    </Select>
                                </div>
                                 
                                
                                <div className="flex space-x-4 w-full mt-3">
                                <label htmlFor="" className="text-right w-1/3">Note to Pharmacy:</label>
                                <div className="flex border w-1/2">
                                    <Select className="w-28"
                                    placeholder="Directions"
                                    >
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="tom">Tom</Option>
                                    </Select>
                                    <input type="text" placeholder=""  className="border w-full"/>
                                </div>
                                </div>

                                
                            <div className="flex space-x-4 w-full mt-3">
                            <label htmlFor="" className="text-right w-1/3">Note to Client:</label>
                                <div className="flex border w-1/2">
                                    <Select className="w-28"
                                    placeholder="Directions"
                                    >
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="tom">Tom</Option>
                                    </Select>
                                    <input type="text" placeholder=""  className="border w-full"/>
                                </div>
                            </div>
                                
                            <div className="flex space-x-4 w-full mt-3">
                            <label htmlFor="" className="text-right w-1/3">Authorizing Vet:</label>
                                <div className="w-1/2">
                                <Select className="w-full"
                                placeholder="Select a Product"
                                >
                                    <Option value="jack">Yes</Option>
                                    <Option value="lucy">No</Option>
                                </Select>
                                <p className="text-xs tracking-tighter">This is my eSignature and implies i have valid VCPR as definedbt the AVMA.</p>
                                </div>
                            </div>

                            <div className="flex space-x-4 w-full mt-3">
                            <label htmlFor="" className="text-right w-1/3"></label>
                                <div className="w-1/2">
                                    <div className="flex items-center">
                                        <p className="mb-0">Print Rx Details after Authorizing</p>
                                        <div className="border bg-green-800 text-white text-xl text-center font-bold w-6 h-6 ml-2"><i className="fas fa-check"></i></div> 
                                    </div>
                                </div>

                            </div>

                            <div className="flex space-x-4 w-full mt-3">
                            <label htmlFor="" className="text-right w-1/3 hidden sm:block"></label>
                                <div className="sm:w-1/2">
                                    <div className="text-center sm:flex sm:justify-end sm:space-x-6">
                                        <button className="rounded-full py-1 border-2 border-black text-black text-center px-5 ">Save Draft</button>
                                        <button className="rounded-full py-1 border-2 border-black bg-black text-white text-center px-5  mt-3 sm:mt-0">Authorize</button>
                                    </div>
                                </div>
                            </div>
                                

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

export default Form
