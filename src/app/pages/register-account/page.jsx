import React from "react";

export default function RegisterAccount() {
    return (
        <div>
            <form className="justify-between items-center mx-auto w-[70vw] p-[50px]">
                <div className="w-[400px]">
                    <div className="mb-[15px]">
                        <label className="text-black text-opacity-60">Email address (as your login)</label><br />
                        <input className="w-[400px] p-[15px] text-[16px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none" type="email" required />
                    </div>
                    <div className="mb-[15px]">
                        <label className="text-black text-opacity-60">First Name</label><br />
                        <input className="w-[400px] p-[15px] text-[16px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none" type="text " required />
                    </div>
                    <div className="mb-[15px]">
                        <label className="text-black text-opacity-60">Last Name</label><br />
                        <input className="w-[400px] p-[15px] text-[16px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none" type="text" required />
                    </div>
                    <div className="mb-[15px]">
                        <label className="text-black text-opacity-60" htmlFor="phone">Phone Number</label><br />
                        <input
                            className="w-[400px] p-[15px] text-[16px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                            type="tel" id="phone" name="phone" placeholder="(123) 456-7890" pattern="^\(\d{3}\) \d{3}-\d{4}$"
                            title="Phone number should be in the format (123) 456-7890" required
                        />
                    </div>
                    <div className="mb-[15px]">
                        <label className="text-black text-opacity-60" htmlFor="dob">Date of Birth</label><br />
                        <input
                            className="w-[400px] p-[15px] text-[16px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                            type="date" id="dob" name="dob"
                            required
                        />
                    </div>
                    <div className="mb-[15px]">
                        <label className="text-black text-opacity-60" htmlFor="country">Country</label><br />
                        <input
                            className="w-[400px] p-[15px] text-[16px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                            type="text"
                            id="country"
                            name="country"
                            value="United States"
                            readOnly
                        />
                    </div>

                    <div className="mb-[15px]">
                        <label className="text-black text-opacity-60" htmlFor="street-address">Street Address</label><br />
                        <input
                            className="w-[400px] p-[15px] text-[16px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                            type="text"
                            id="street-address"
                            name="street-address"
                            placeholder="Enter your street address"
                            required
                        />
                    </div>
                    <div className="mb-[15px]">
                        <label className="text-black text-opacity-60" htmlFor="city">City</label><br />
                        <input
                            className="w-[400px] p-[15px] text-[16px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                            type="text"
                            id="city"
                            name="city"
                            placeholder="Enter your city"
                            required
                        />
                    </div>

                    <div className="mb-[15px]">
                        <label className="text-black text-opacity-60" htmlFor="state">State</label><br />
                        <select
                            className="w-[400px] p-[15px] text-[16px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                            id="state"
                            name="state"
                            required
                        >
                            <option value="" disabled selected>Select your state</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </select>
                    </div>
                    <div className="mb-[15px]">
                        <label className="text-black text-opacity-60" htmlFor="zip">Zip Code</label><br />
                        <input
                            className="w-[400px] p-[15px] text-[16px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                            type="text"
                            id="zip"
                            name="zip"
                            placeholder="Enter your zip code"
                            pattern="\d{5}(-\d{4})?"
                            title="Zip code should be in the format 12345 or 12345-6789"
                            required
                        />
                    </div>
                    <div className="mb-[15px]">
                        <input className="mr-[10px]" type="checkbox" id="remember-me" />
                        <label>I agree to the Term of Service, Privacy Policy, Consent To Treat, and Cancellation Policy</label>
                    </div>
                    <button className="bg-[#ffa9f9] text-white py-[15px] px-[20px] hover:bg-black" type="submit">Register</button>
                </div>
            </form>
        </div>
    );
}