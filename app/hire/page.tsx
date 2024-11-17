"use client";

import PageTransition from "@/components/page_transition";
import SuccessModal from "@/components/success_modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ErrorModal from "@/components/error_modal";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+254 746 157 232",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "russel.odhiambo@students.ku.ac.ke",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Nairobi, Kenya",
  },
];

export default function Hire() {
  const timer = useRef<NodeJS.Timeout | null>(null);
  const [error, set_error] = useState(false);
  const [is_loading, set_is_loading] = useState(false);
  const [success, set_success] = useState(false);
  const [message, set_message] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    if (success) {
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => set_success(false), 3000);
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }

    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [success]);

  useEffect(() => {
    if (error) {
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => set_error(false), 3000);
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }

    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [error]);

  const handle_form_submit = async () => {
    set_is_loading(true);

    try {
      const res = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify({
          firstname: message.firstname,
          lastname: message.lastname,
          email: message.email,
          phone: message.phone,
          message: message.message,
        }),
      });

      if (res.ok) {
        set_success(true);
        set_message((message) => ({
          ...message,
          firstname: "",
          lastname: "",
          phone: "",
          email: "",
          message: "",
        }));
      } else {
        set_error(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      set_is_loading(false);
    }
  };

  return (
    <PageTransition>
      {success && <SuccessModal />}
      {error && <ErrorModal />}

      <div className="py-12">
        <div className="container mx-auto">
          <div className="flex xd:flex-col flex-row gap-[30px]">
            <div className="w-[54%] order-none xd:order-2 xd:w-full">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!is_loading) handle_form_submit();
                }}
                className="flex flex-col gap-6 p-10 bg-[url(/images/background.png)] bg-[0_0] bg-[size:200px] bg-[#16171b] shadow-[0_0_0_1px_rgba(255,255,255,.2)] rounded-xl"
              >
                <h3 className="text-4xl text-[#ff4d4d]">
                  Let&apos;s work together
                </h3>
                <p className="text-white/60">
                  If you&apos;re passionate about using your technical skills to
                  make the world a safer, better place for everyone, I believe
                  we could make a great team working toward that goal.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    type="text"
                    required
                    placeholder="Firstname"
                    minLength={3}
                    maxLength={50}
                    value={message.firstname}
                    onChange={(e) =>
                      set_message((message) => ({
                        ...message,
                        firstname: e.target.value,
                      }))
                    }
                  />
                  <Input
                    type="text"
                    required
                    value={message.lastname}
                    placeholder="Lastname"
                    minLength={3}
                    maxLength={50}
                    onChange={(e) =>
                      set_message((message) => ({
                        ...message,
                        lastname: e.target.value,
                      }))
                    }
                  />
                  <Input
                    type="email"
                    required
                    value={message.email}
                    placeholder="Email Address"
                    onChange={(e) =>
                      set_message((message) => ({
                        ...message,
                        email: e.target.value,
                      }))
                    }
                  />
                  <Input
                    type="tel"
                    required
                    value={message.phone}
                    maxLength={20}
                    placeholder="Phone number"
                    pattern="^(\+?\d{1,3})?[\s\-\(\)]?(\d{1,4})[\s\-\(\)]?(\d{1,4})[\s\-\(\)]?(\d{1,4})$"
                    onChange={(e) =>
                      set_message((message) => ({
                        ...message,
                        phone: e.target.value,
                      }))
                    }
                  />
                </div>

                <Textarea
                  className="h-[150px]"
                  required
                  minLength={50}
                  maxLength={1000}
                  value={message.message}
                  placeholder="Type your message here."
                  onChange={(e) =>
                    set_message((message) => ({
                      ...message,
                      message: e.target.value,
                    }))
                  }
                />

                <div className="w-full flex items-center justify-center">
                  <Button
                    size="default"
                    className={`max-w-40 bg-[#ff4d4d] rounded-full flex gap-2 hover:bg-[#f29871] ${
                      is_loading ? "cursor-not-allowed" : "cursor-pointer"
                    }`}
                  >
                    Send
                    {!is_loading && (
                      <Image
                        src="/icons/send.png"
                        width={20}
                        height={20}
                        alt=""
                      />
                    )}
                    {is_loading && <div className="loader"></div>}
                  </Button>
                </div>
              </form>
            </div>

            <div className="flex-1 flex items-center justify-end xd:justify-normal order-none xd:order-1 xd:mb-8 mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((item, idx) => {
                  return (
                    <li key={idx} className="flex items-center gap-6">
                      <div className="xd:w-[52px] xd:h-[52px] w-[72px] h-[72px] bg-[url(/images/background.png)] bg-[0_0] bg-[size:200px] bg-[#16171b] text-[#ff4d4d] rounded-md flex items-center justify-center">
                        <div className="text-[28px]">{item.icon}</div>
                      </div>

                      <div className="flex-1">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="xd:text-sm text-xl">
                          {item.description}
                        </h3>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
