const posts = [
  {
    id: 1,
    title: "5 Reasons Why You Should Eat More Fruit Every Day",
    href: "#",
    tag: "24m ago",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This is a wider card with supporting text below as a natural.This is a wider card with supporting text below as a natural lead-in to additional content. This is a wider card with supporting text below as a natural.This is a wider card with supporting text below as a natural lead-in to additional content...",
    imageUrl:
      "https://images.unsplash.com/photo-1691945253089-a68132b86169?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1456&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
  {
    id: 2,
    title: "Meet The Man Who Designed The Ducati Monster",
    href: "#",
    tag: "24m ago",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content...",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1694166713270-da1164385b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "Mar 16, 2023",
    datetime: "2023-03-16",
  },
  {
    id: 3,
    title: "Meet The Man Who Designed The Ducati Monster",
    href: "#",
    tag: "24m ago",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content...",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1694166713270-da1164385b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "Oct 5, 2023",
    datetime: "2023-10-10",
  },
  {
    id: 4,
    title: "Lamborghini makes Huracán GT3 racer faster for 2019",
    href: "#",
    tag: "24m ago",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content...",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1694166713270-da1164385b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "Oct 10, 2023",
    datetime: "2020-03-16",
  },
  {
    id: 5,
    title: "ZF plans $14 billion autonomous vehicle push, concept van",
    href: "#",
    tag: "24m ago",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content...",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1694166713270-da1164385b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "Oct 9, 2023",
    datetime: "2020-03-16",
  },
  {
    id: 6,
    title: " Why the world would end without political polls",
    href: "#",
    tag: "24m ago",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content...",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1694166713270-da1164385b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "Oct 9, 2023",
    datetime: "2020-03-16",
  },
  {
    id: 7,
    title: " Meet The Man Who Designed The Ducati Monster",
    href: "#",
    tag: "24m ago",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content...",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1694166713270-da1164385b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "Oct 9, 2023",
    datetime: "2020-03-16",
  },
  {
    id: 8,
    title: "2020 Audi R8 Spyder spy shots release",
    href: "#",
    tag: "24m ago",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content...",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1694166713270-da1164385b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "Oct 9, 2023",
    datetime: "2020-03-16",
  },
  {
    id: 9,
    title: "ZF plans $14 billion autonomous vehicle push, concept van",
    href: "#",
    tag: "24m ago",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content...",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1694166713270-da1164385b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "Oct 9, 2023",
    datetime: "2020-03-16",
  },
  {
    id: 10,
    title: "Boost your conversion rate",
    href: "#",
    tag: "24m ago",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content...",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1694166713270-da1164385b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "Oct 9, 2023",
    datetime: "2020-03-16",
  },
  {
    id: 11,
    title: " Lamborghini makes Huracán GT3 racer faster for 2019",
    href: "#",
    tag: "24m ago",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content...",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1694166713270-da1164385b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "Oct 9, 2023",
    datetime: "2020-03-16",
  },
  {
    id: 12,
    title: "Boost your conversion rate",
    href: "#",
    tag: "24m ago",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content...",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1694166713270-da1164385b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "Oct 9, 2023",
    datetime: "2020-03-16",
  },
];
import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json(posts)
}