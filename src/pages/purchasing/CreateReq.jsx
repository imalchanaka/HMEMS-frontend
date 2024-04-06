import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"

const CreateReq = () => {
  const [serialNumber, setSerialNumber] = useState("");
  const [vendor, setVendor] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [purchasingDate, setPurchasingDate] = useState("");
  const [warrantyPeriod, setWarrantyPeriod] = useState("");
  const [genericName, setGenericName] = useState("");
  const [equipmentType, setEquipmentType] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div>
        <Card className="max-w-2xl w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Enter Equipment Information</CardTitle>
        <CardDescription>Please fill out the following fields:</CardDescription>
        {/* Error handling component */}
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="serialNumber">Serial Number</Label>
              <Input
                id="serialNumber"
                type="text"
                placeholder="Enter Serial Number"
                required
                onChange={(e) => setSerialNumber(e.target.value)}
                value={serialNumber}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="vendor">Vendor</Label>
              <Input
                id="vendor"
                type="text"
                placeholder="Enter Vendor"
                required
                onChange={(e) => setVendor(e.target.value)}
                value={vendor}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="brand">Brand</Label>
              <Input
                id="brand"
                type="text"
                placeholder="Enter Brand"
                required
                onChange={(e) => setBrand(e.target.value)}
                value={brand}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="model">Model</Label>
              <Input
                id="model"
                type="text"
                placeholder="Enter Model"
                required
                onChange={(e) => setModel(e.target.value)}
                value={model}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="purchasingDate">Purchasing Date</Label>
              <Input
                id="purchasingDate"
                type="date"
                required
                onChange={(e) => setPurchasingDate(e.target.value)}
                value={purchasingDate}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="warrantyPeriod">Warranty Period</Label>
              <Input
                id="warrantyPeriod"
                type="text"
                placeholder="Enter Warranty Period"
                required
                onChange={(e) => setWarrantyPeriod(e.target.value)}
                value={warrantyPeriod}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="genericName">Generic Name</Label>
              <Input
                id="genericName"
                type="text"
                placeholder="Enter Generic Name"
                required
                onChange={(e) => setGenericName(e.target.value)}
                value={genericName}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="equipmentType">Equipment Type</Label>
              <Input
                id="equipmentType"
                type="text"
                placeholder="Enter Equipment Type"
                required
                onChange={(e) => setEquipmentType(e.target.value)}
                value={equipmentType}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="comment">Comment</Label>
              <Textarea id="comment"
                type="text"
                placeholder="Enter Comment"
                required
                onChange={(e) => setComment(e.target.value)}
                value={comment} />
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

export default CreateReq;
