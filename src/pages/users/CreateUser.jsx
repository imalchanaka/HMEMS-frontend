import React, { useState } from "react";
import { useUserContext } from "@/hooks/useUserContext.js";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import {Label} from "@/components/ui/label.jsx";
import {Input} from "@/components/ui/input.jsx";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select.jsx";
import {Textarea} from "@/components/ui/textarea.jsx";
import {Button} from "@/components/ui/button.jsx";

const CreateUser = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [addressLine1, setAddressLine1] = useState("");
    const [addressLine2, setAddressLine2] = useState("");
    const [contact, setContact] = useState("");
    const [role, setRole] = useState("");
    const { addUser, error, isLoading, isSuccess } = useUserContext();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await addUser(
                email,
                password,
                firstName,
                lastName,
                addressLine1,
                addressLine2,
                contact,
                role
            );
            // Clear input fields on success
            setEmail("");
            setPassword("");
            setFirstName("");
            setLastName("");
            setAddressLine1("");
            setAddressLine2("");
            setContact("");
            setRole("");
        } catch (error) {
            console.error('addUser failed:', error.message);
        }
    };
    return (
        <div>
            <Card className="max-w-2xl w-2xl mx-auto">
                <CardHeader>
                    <CardTitle className="text-2xl">Create User</CardTitle>
                    <CardDescription>Please fill out the following fields using correct details:</CardDescription>
                    {/* Error handling component */}
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="serialNumber">Email address</Label>
                                <Input
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="brand">Password</Label>
                                <Input
                                    type="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="model">First Name</Label>
                                <Input
                                    type="text"
                                    onChange={(e) => setFirstName(e.target.value)}
                                    value={firstName}
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="purchasingDate">Last Name</Label>
                                <Input
                                    type="text"
                                    onChange={(e) => setLastName(e.target.value)}
                                    value={lastName}
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="warrantyPeriod">Address Line 1</Label>
                                <Input
                                    type="text"
                                    onChange={(e) => setAddressLine1(e.target.value)}
                                    value={addressLine1}
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="genericName">Address Line 2</Label>
                                <Input
                                    type="text"
                                    onChange={(e) => setAddressLine2(e.target.value)}
                                    value={addressLine2}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="genericName">Contact</Label>
                                <Input
                                    type="text"
                                    onChange={(e) => setContact(e.target.value)}
                                    value={contact}
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="role">Role</Label>
                                <Select
                                        id="role"
                                        name="role"
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                        required
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a Role"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Fruits</SelectLabel>
                                            <SelectItem value="wardAdmin">Ward Admin</SelectItem>
                                            <SelectItem value="electrician">Electrician</SelectItem>
                                            <SelectItem value="Technical Vendor">Technical Vendor</SelectItem>
                                            <SelectItem value="Non Technical vendor">Non Technical vendor</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <Button type="submit" className="w-full">
                                Submit
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default CreateUser;
