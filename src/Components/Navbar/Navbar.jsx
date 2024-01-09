
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { FacebookRounded, FavoriteBorderOutlined, Instagram, Twitter } from '@mui/icons-material'
import { Link } from '@mui/material'
import CartSidebar from '../Sidebar/CartSidebar'
import { useRef } from 'react'
import SearchBar from '../Forms/SearchForm'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// const navigation = {
//     // categories: [
//     //     {
//     //         id: 'women',
//     //         name: 'Women',
//     //         featured: [
//     //             {
//     //                 name: 'New Arrivals',
//     //                 href: '#',
//     //                 imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
//     //                 imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
//     //             },
//     //             {
//     //                 name: 'Basic Tees',
//     //                 href: '#',
//     //                 imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
//     //                 imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
//     //             },
//     //         ],
//     //         sections: [
//     //             {
//     //                 id: 'clothing',
//     //                 name: 'Clothing',
//     //                 items: [
//     //                     { name: 'Tops', href: '#' },
//     //                     { name: 'Dresses', href: '#' },
//     //                     { name: 'Pants', href: '#' },
//     //                     { name: 'Denim', href: '#' },
//     //                     { name: 'Sweaters', href: '#' },
//     //                     { name: 'T-Shirts', href: '#' },
//     //                     { name: 'Jackets', href: '#' },
//     //                     { name: 'Activewear', href: '#' },
//     //                     { name: 'Browse All', href: '#' },
//     //                 ],
//     //             },
//     //             {
//     //                 id: 'accessories',
//     //                 name: 'Accessories',
//     //                 items: [
//     //                     { name: 'Watches', href: '#' },
//     //                     { name: 'Wallets', href: '#' },
//     //                     { name: 'Bags', href: '#' },
//     //                     { name: 'Sunglasses', href: '#' },
//     //                     { name: 'Hats', href: '#' },
//     //                     { name: 'Belts', href: '#' },
//     //                 ],
//     //             },
//     //             {
//     //                 id: 'brands',
//     //                 name: 'Brands',
//     //                 items: [
//     //                     { name: 'Full Nelson', href: '#' },
//     //                     { name: 'My Way', href: '#' },
//     //                     { name: 'Re-Arranged', href: '#' },
//     //                     { name: 'Counterfeit', href: '#' },
//     //                     { name: 'Significant Other', href: '#' },
//     //                 ],
//     //             },
//     //         ],
//     //     },
//     //     {
//     //         id: 'men',
//     //         name: 'Men',
//     //         featured: [
//     //             {
//     //                 name: 'New Arrivals',
//     //                 href: '#',
//     //                 imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
//     //                 imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
//     //             },
//     //             {
//     //                 name: 'Artwork Tees',
//     //                 href: '#',
//     //                 imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
//     //                 imageAlt:
//     //                     'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
//     //             },
//     //         ],
//     //         sections: [
//     //             {
//     //                 id: 'clothing',
//     //                 name: 'Clothing',
//     //                 items: [
//     //                     { name: 'Tops', href: '#' },
//     //                     { name: 'Pants', href: '#' },
//     //                     { name: 'Sweaters', href: '#' },
//     //                     { name: 'T-Shirts', href: '#' },
//     //                     { name: 'Jackets', href: '#' },
//     //                     { name: 'Activewear', href: '#' },
//     //                     { name: 'Browse All', href: '#' },
//     //                 ],
//     //             },
//     //             {
//     //                 id: 'accessories',
//     //                 name: 'Accessories',
//     //                 items: [
//     //                     { name: 'Watches', href: '#' },
//     //                     { name: 'Wallets', href: '#' },
//     //                     { name: 'Bags', href: '#' },
//     //                     { name: 'Sunglasses', href: '#' },
//     //                     { name: 'Hats', href: '#' },
//     //                     { name: 'Belts', href: '#' },
//     //                 ],
//     //             },
//     //             {
//     //                 id: 'brands',
//     //                 name: 'Brands',
//     //                 items: [
//     //                     { name: 'Re-Arranged', href: '#' },
//     //                     { name: 'Counterfeit', href: '#' },
//     //                     { name: 'Full Nelson', href: '#' },
//     //                     { name: 'My Way', href: '#' },
//     //                 ],
//     //             },
//     //         ],
//     //     },
//     // ],

// }


const navigation = {
    pages: [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        // ... other pages
    ]
};

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const wishlists = useSelector((state) => state.wishlist.items);
    const [open, setOpen] = useState(false)
    const [isOpenForm, setIsOpenForm] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };


    const toggleSearch = () => {
        setIsOpenForm(!isOpenForm);
    };

    const handleWishlist = () => {
        return navigate('/wishlist', { replace: true })
    }



    return (
        <div className=" relative bg-white">
            {/* Mobile menu */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                                <div className="flex px-4 pb-2 pt-5">
                                    <button
                                        type="button"
                                        className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                        onClick={() => setOpen(false)}
                                    >
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>

                                {/* Links */}
                                <Tab.Group as="div" className="mt-2">
                                    {/* <div className="border-b border-gray-200">
                                        <Tab.List className="-mb-px flex space-x-8 px-4">
                                            {navigation.categories.map((category) => (
                                                <Tab
                                                    key={category.name}
                                                    className={({ selected }) =>
                                                        classNames(
                                                            selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900',
                                                            'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                                                        )
                                                    }
                                                >
                                                    {category.name}
                                                </Tab>
                                            ))}
                                        </Tab.List>
                                    </div> */}
                                    {/* <Tab.Panels as={Fragment}>
                                        {navigation.categories.map((category) => (
                                            <Tab.Panel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
                                                <div className="grid grid-cols-2 gap-x-4">
                                                    {category.featured.map((item) => (
                                                        <div key={item.name} className="group relative text-sm">
                                                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                                <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center" />
                                                            </div>
                                                            <Link to={item.href} className="mt-6 block font-medium text-gray-900">
                                                                <span className="absolute inset-0 z-10" aria-hidden="true" />
                                                                {item.name}
                                                            </Link>
                                                            <p aria-hidden="true" className="mt-1">
                                                                Shop now
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                                {category.sections.map((section) => (
                                                    <div key={section.name}>
                                                        <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                                                            {section.name}
                                                        </p>
                                                        <ul
                                                            role="list"
                                                            aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                                            className="mt-6 flex flex-col space-y-6"
                                                        >
                                                            {section.items.map((item) => (
                                                                <li key={item.name} className="flow-root">
                                                                    <Link to={item.href} className="-m-2 block p-2 text-gray-500">
                                                                        {item.name}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </Tab.Panel>
                                        ))}
                                    </Tab.Panels> */}
                                </Tab.Group>

                                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                                    {navigation.pages.map((page) => (
                                        <div key={page.name} className="flow-root">
                                            <Link to={page?.href} className="-m-2 block p-2 font-medium text-gray-900">
                                                {page.name}
                                            </Link>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                                    <div className="flow-root">
                                        <Link to="#" className="-m-2 block p-2 font-medium text-gray-900">
                                            Sign in
                                        </Link>
                                    </div>
                                    <div className="flow-root">
                                        <Link to="#" className="-m-2 block p-2 font-medium text-gray-900">
                                            Create account
                                        </Link>
                                    </div>
                                </div>

                                <div className="border-t border-gray-200 px-4 py-6">
                                    <Link to="#" className="-m-2 flex items-center p-2">
                                        <img
                                            src="https://tailwindui.com/img/flags/flag-canada.svg"
                                            alt=""
                                            className="block h-auto w-5 flex-shrink-0"
                                        />
                                        <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                                        <span className="sr-only">, change currency</span>
                                    </Link>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            <header className=" bg-white border-b border-gray-200 sticky top-0 z-50">
                <div className='bg-indigo-600 px-4 '>
                    <div className='flex h-10 items-center justify-between mx-auto max-w-7xl sm:px-6 lg:px-8'>
                        <div>
                            <p className=" text-sm font-medium text-white sm:px-6 lg:px-8">
                                Get free delivery on orders over $100
                            </p>
                        </div>
                        <div className='flex gap-2 text-white'>
                            <FacebookRounded />
                            <Twitter />
                            <Instagram />
                        </div>
                    </div>
                </div>


                <nav className="px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        <div className="flex z-50 h-16 items-center">
                            <button
                                type="button"
                                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                                onClick={() => setOpen(true)}
                            >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </button>

                            {/* Logo */}
                            <div className="ml-4 flex lg:ml-0">
                                <Link to="/">
                                    <span className="sr-only">Your Company</span>
                                    <img
                                        className="h-14 w-14"
                                        src="https://t3.ftcdn.net/jpg/02/47/48/00/360_F_247480017_ST4hotATsrcErAja0VzdUsrrVBMIcE4u.jpg"
                                        alt=""
                                    />
                                </Link>
                            </div>

                            {/* Flyout menus */}
                            <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                                <div className="flex h-full space-x-8">
                                    {/* <div>
                                        {navigation.categories.map((category) => (
                                            <Popover key={category.name} className="flex">
                                                {({ open }) => (
                                                    <>
                                                        <div className="relative flex">
                                                            <Popover.Button
                                                                className={classNames(
                                                                    open
                                                                        ? 'border-indigo-600 text-indigo-600'
                                                                        : 'border-transparent text-gray-700 hover:text-gray-800',
                                                                    'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                                                                )}
                                                            >
                                                                {category.name}
                                                            </Popover.Button>
                                                        </div>

                                                        <Transition
                                                            as={Fragment}
                                                            enter="transition ease-out duration-200"
                                                            enterFrom="opacity-0"
                                                            enterTo="opacity-100"
                                                            leave="transition ease-in duration-150"
                                                            leaveFrom="opacity-100"
                                                            leaveTo="opacity-0"
                                                        >
                                                            <Popover.Panel className="absolute z-10 inset-x-0 top-full text-sm text-gray-500">
                                                                
                                                                <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                                                                <div className="relative bg-white">
                                                                    <div className="mx-auto max-w-7xl px-8">
                                                                        <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                                                            <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                                                                {category.featured.map((item) => (
                                                                                    <div key={item.name} className="group relative text-base sm:text-sm">
                                                                                        <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                                                            <img
                                                                                                src={item.imageSrc}
                                                                                                alt={item.imageAlt}
                                                                                                className="object-cover object-center"
                                                                                            />
                                                                                        </div>
                                                                                        <Link to={item.href} className="mt-6 block font-medium text-gray-900">
                                                                                            <span className="absolute inset-0 z-10" aria-hidden="true" />
                                                                                            {item.name}
                                                                                        </Link>
                                                                                        <p aria-hidden="true" className="mt-1">
                                                                                            Shop now
                                                                                        </p>
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                            <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                                                                {category.sections.map((section) => (
                                                                                    <div key={section.name}>
                                                                                        <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                                                                            {section.name}
                                                                                        </p>
                                                                                        <ul
                                                                                            role="list"
                                                                                            aria-labelledby={`${section.name}-heading`}
                                                                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                                                        >
                                                                                            {section.items.map((item) => (
                                                                                                <li key={item.name} className="flex">
                                                                                                    <Link to={item.href} className="hover:text-gray-800">
                                                                                                        {item.name}
                                                                                                    </Link>
                                                                                                </li>
                                                                                            ))}
                                                                                        </ul>
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Popover.Panel>
                                                        </Transition>
                                                    </>
                                                )}
                                            </Popover>
                                        ))}
                                    </div> */}

                                    {navigation.pages.map((page) => (
                                        <Link
                                            key={page.name}
                                            to={page.href}
                                            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                                        >
                                            {page.name}
                                        </Link>
                                    ))}
                                </div>
                            </Popover.Group>

                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    <Link to="/signin" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                        Sign in
                                    </Link>
                                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                                    <Link to="/create-account" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                        Create account
                                    </Link>
                                </div>

                                <div className="hidden lg:ml-8 lg:flex">
                                    <Link to="#" className="flex items-center text-gray-700 hover:text-gray-800">
                                        <img
                                            src="https://tailwindui.com/img/flags/flag-canada.svg"
                                            alt=""
                                            className="block h-auto w-5 flex-shrink-0"
                                        />
                                        <span className="ml-3 block text-sm font-medium">CAD</span>
                                        <span className="sr-only">, change currency</span>
                                    </Link>
                                </div>

                                {/* Search */}
                                <div className="flex lg:ml-6">
                                    <Link to="#" onClick={toggleSearch} className="p-2 text-gray-400 hover:text-gray-500">
                                        <span className="sr-only">Search</span>
                                        <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                                    </Link>
                                    <SearchBar isOpenForm={isOpenForm} />
                                </div>

                                {/* Wishlist */}
                                <div className="ml-4 flow-root lg:ml-6">
                                    <button className="group -m-2 flex items-center p-2" onClick={handleWishlist}>
                                        <FavoriteBorderOutlined
                                            className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                            aria-hidden="true"

                                        />
                                        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{wishlists.length}</span>
                                        <span className="sr-only">items in wishlist, view Favorite</span>
                                    </button>
                                </div>
                                {/* Cart */}
                                <div className="ml-4 flow-root lg:ml-6">
                                    <button className="group -m-2 flex items-center p-2" onClick={toggleSidebar}>
                                        <ShoppingBagIcon
                                            className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                            aria-hidden="true"

                                        />
                                        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{cartItems.length}</span>
                                        <span className="sr-only">items in cart, view bag</span>
                                    </button>
                                    <div className={`cart-sidebar ${isOpen ? 'open' : 'closed'}`}>
                                        <CartSidebar isOpen={isOpen} setIsOpen={setIsOpen}></CartSidebar>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}


export default Navbar;
