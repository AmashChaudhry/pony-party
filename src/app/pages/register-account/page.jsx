'use client'
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterAccount() {
    const router = useRouter();
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [loading, setLoading] = useState(false);

    const register = async () => {
        try {
            setLoading(true);

            const response = await fetch('/api/register-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });
            
        } catch (error) {
            console.log("Rgisteration failed");
        }
    }

    useEffect(() => {
        if (user.firstName.length > 0 && user.lastName.length > 0 && user.email.length > 0 && user.password.length > 7) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className="flex flex-col items-center w-full max-w-[1200px] m-auto sm:px-[20px] lg:px-[60px]">
            <form className="flex flex-col items-start w-full max-w-[500px] px-[25px] py-[40px]">
                <div className="flex flex-rox justify-center w-full mb-[30px]">
                    <h2 className="text-[24px] font-bold">Register</h2>
                </div>
                <div className="mb-[15px] w-full">
                    <label className="text-black text-opacity-60">Email address (as your login)</label><br />
                    <input className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                        type="email"
                        id="email"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-[15px] w-full">
                    <label className="text-black text-opacity-60">First Name</label><br />
                    <input className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                        type="text"
                        id="firstName"
                        value={user.firstName}
                        onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-[15px] w-full">
                    <label className="text-black text-opacity-60">Last Name</label><br />
                    <input className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                        type="text"
                        id="lastName"
                        value={user.lastName}
                        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-[15px] w-full">
                    <label className="text-black text-opacity-60">Password</label><br />
                    <input className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                        type="password"
                        id="password"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        required
                    />
                </div>
                {/* <div className="mb-[15px] w-full">
                    <label className="text-black text-opacity-60">Phone Number</label><br />
                    <input className="w-full pl-[40px] p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                        type="tel"
                        placeholder="(123) 456-7890"
                        pattern="^\(\d{3}\) \d{3}-\d{4}$"
                        title="Phone number should be in the format (123) 456-7890"
                        required
                    />
                </div>
                <div className="mb-[15px] w-full">
                    <label className="text-black text-opacity-60" htmlFor="dob">Date of Birth</label><br />
                    <input
                        className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                        type="date"
                        required
                    />
                </div>
                <div className="mb-[15px] w-full">
                    <label className="text-black text-opacity-60">Country</label><br />
                    <select className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                        required
                    >
                        <option value="AL">United State</option>
                    </select>
                </div>
                <div className="mb-[15px] w-full">
                    <label className="text-black text-opacity-60">Street Address</label><br />
                    <input
                        className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                        type="text"
                        placeholder="Enter your street address"
                        required
                    />
                </div>
                <div className="mb-[15px] w-full">
                    <label className="text-black text-opacity-60">City</label><br />
                    <input
                        className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                        type="text"
                        placeholder="Enter your city"
                        required
                    />
                </div>
                <div className="mb-[15px] w-full">
                    <label className="text-black text-opacity-60">State</label><br />
                    <select className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
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
                <div className="mb-[15px] w-full">
                    <label className="text-black text-opacity-60" htmlFor="zip">Zip Code</label><br />
                    <input
                        className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                        type="text"
                        placeholder="Enter your zip code"
                        pattern="\d{5}(-\d{4})?"
                        title="Zip code should be in the format 12345 or 12345-6789"
                        required
                    />
                </div> */}
                <div>
                    <p>
                        Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our Privacy Policy and Term of Service.
                    </p><br />
                </div>
                <div className="mb-[30px]">
                    <input className="mr-[10px]" type="checkbox" id="remember-me" />
                    <label>I agree to the Term of Service, Privacy Policy, Consent To Treat, and Cancellation Policy</label>
                </div>
                <div className="flex flex-rox justify-center w-full">
                    <button
                        className="bg-[#ffa9f9] text-white w-fit py-[15px] px-[20px] hover:bg-black"
                        type="submit"
                        onClick={register}
                    >
                        { loading ? "Loading..." : "Register"}
                    </button>
                </div>
            </form>
        </div>
    );
}