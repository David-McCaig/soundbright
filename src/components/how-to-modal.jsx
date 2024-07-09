import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'

export default function MyModal({isOpen, setIsOpen}) {

  function close() {
    setIsOpen(false)
  }

  return (
    <>

      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close} >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-secondary-bg-color p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle as="h3" className=" text-xl font-bold text-primary-text-color">
                How to use:
              </DialogTitle>
              <ul className="text-primary-text-color">
                <li className="mt-4"><span className="font-semibold">Step 1: </span>You will be asked if soundBright can use your microphone. Click allow this time. This will allow the globe to react to your voice.</li>
                <li className="mt-3"><span className="font-semibold">Step 2: </span> If the globe is not red without you talking, you may need to adjust the Ambient Noise Filter. Adjust the filter slider until the globe turns red when you&apos;re not speaking. Once the globe is red without any talking, you&apos;re good to go!</li>
                <li className="mt-3"><span className="font-semibold">Step 3: </span> If the globe is in the green it means that you are talking at a sound level to where somebody should be able to hear you. If the globe is yellow or red it means that the person you are talking to might have trouble hearing you.</li>
              </ul>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={close}
                >
                  Got it, thanks!
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}
