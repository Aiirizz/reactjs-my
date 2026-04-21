function Navbar() {

    return (
        <header class="w-full z-20 top-0 start-0">
            <nav class="bg-sky-700/50">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a href="https://flowbite.com" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="h-7" alt="Flowbite Logo" />
                        <span class="self-center text-xl text-heading font-semibold whitespace-nowrap">Arizqi</span>
                    </a>
                    <div class="flex items-center space-x-6 rtl:space-x-reverse">
                        <a href="tel:5541251234" class="text-sm  text-body hover:underline">kikimaulana935@gmail.com</a>
                        <button class="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition shadow">CV</button>
                    </div>
                </div>
            </nav>

            <nav class="bg-blue-100/20 border-y border-default border-default">
                <div class="max-w-screen-xl px-4 py-3 mx-auto">
                    <div class="flex justify-center">
                        <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                            <li>
                                <a href="#" class="text-heading hover:underline" aria-current="page">About</a>
                            </li>
                            <li>
                                <a href="#" class="text-heading hover:underline">Skill</a>
                            </li>
                            <li>
                                <a href="#" class="text-heading hover:underline">Project</a>
                            </li>
                            <li>
                                <a href="#" class="text-heading hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default Navbar