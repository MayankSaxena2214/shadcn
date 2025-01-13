import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import React from 'react'
  
  const DialogForm = () => {
    return (
      <div>
        <Dialog>
  <DialogTrigger className="m-auto bg-black text-white flex justify-center items-center mt-16 p-4 rounded-2xl">Open Modal</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

      </div>
    )
  }
  
  export default DialogForm