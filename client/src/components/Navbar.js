import '../css/style.css';
import main from "../js/main";

const getToken = window.sessionStorage.getItem('token');

const Navbar = () =>{
    if(getToken == null){
        return(
            <header>
                <div class="container">
                    <nav class="nav">
                        <ul class="nav-list nav-list-mobile">
                            <li class="nav-item">
                                <div class="mobile-meun">
                                    <span class="line line-top"></span>
                                    <span class="line line-bottom"></span>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a href="/" class="nav-link nav-link-apple"></a>
                            </li>
                            <li class="nav-item">
                                <a href="/Store" class="nav-link nav-link-bag"></a>
                            </li>
                        </ul>
                        <ul class="nav-list nav-list-larger">                
                            <li class="nav-item nav-item-hidden">
                                <a href="/" class="nav-link nav-link-apple"></a>
                            </li>
                            <li class="nav-item">
                                <a href="/store" class="nav-link">Store</a>
                            </li>
                            <li class="nav-item">
                                <a href="/Store" class="nav-link">Mac</a>
                            </li>
                            <li class="nav-item">
                                <a href="/Store" class="nav-link">iPad</a>
                            </li>
                            <li class="nav-item">
                                <a href="/Store" class="nav-link">iPhone</a>
                            </li>
                            <li class="nav-item">
                                <a href="/Store" class="nav-link">Watch</a>
                            </li>
                            <li class="nav-item">
                                <a href="/Store" class="nav-link">AirPods</a>
                            </li>
                            <li class="nav-item">
                                <a href="/Store" class="nav-link">TV &amp; Home</a>
                            </li>
                            <li class="nav-item">
                                <a href="/Store" class="nav-link">Only on Apple</a>
                            </li>
                            <li class="nav-item">
                                <a href="/Store" class="nav-link">Accessories</a>
                            </li>
                            <li class="nav-item">
                                <a href="/Store" class="nav-link">Support</a>
                            </li>
                            <li class="nav-item">
                                <a href="/Store" class="nav-link nav-link-search"></a> 
                            </li>
                            <li class="nav-item nav-item-hidden dropdown">
                                {/* <a href="/Store" class="nav-link nav-link-bag"> */}
                                    <button class="dropbtn nav-link nav-link-bag">                                   
                                    </button>
                                    <div class="dropdown-content">
                                        <ul>
                                            <li className='bag-icon'>
                                            <a href="/Bag">Bag</a>
                                            </li>
                                            <li className='Orders-icon'>
                                            <a href="/Store">Orders</a>
                                            </li>
                                            <li className='Account-icon'>
                                            <a href="/Member-Info">Account</a>
                                            </li>
                                            <li className='Signin-icon'>
                                            <a href="/Sign-in">Signin</a>
                                            </li>
                                        </ul>
                                        {/* <a href="/Store">Link 1</a>
                                        <a href="/Store">Link 2</a>
                                        <a href="/Store">Link 3</a> */}
                                    </div>
                                {/* </a>  */}
                            </li>
                        </ul>
                    </nav>
                </div>
           </header>
        )
    }else{
        return(
            <header>
                <div class="container">
                    <nav class="nav">
                        <ul class="nav-list nav-list-mobile">
                            <li class="nav-item">
                                <div class="mobile-meun">
                                    <span class="line line-top"></span>
                                    <span class="line line-bottom"></span>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a href="/" class="nav-link nav-link-apple"></a>
                            </li>
                            <li class="nav-item">
                                <a href="/Store" class="nav-link nav-link-bag"></a>
                            </li>
                        </ul>
                        <ul class="nav-list nav-list-larger">                
                            <li class="nav-item nav-item-hidden">
                                <a href="/" class="nav-link nav-link-apple"></a>
                            </li>
                            <li class="nav-item">
                                <a href="/store" class="nav-link">Store</a>
                            </li>
                            <li class="nav-item">
                                <a href="/Store" class="nav-link">Mac</a>
                            </li>
                            <li class="nav-item">
                                <a href="/Store" class="nav-link">iPad</a>
                            </li>
                            <li class="nav-item">
                                <a href="/Store" class="nav-link">iPhone</a>
                            </li>
                            <li class="nav-item">
                                <a href="/Store" class="nav-link">Watch</a>
                            </li>
                            <li class="nav-item">
                                <a href="/Store" class="nav-link">AirPods</a>
                            </li>
                            <li class="nav-item">
                                <a href="/Store" class="nav-link">TV &amp; Home</a>
                            </li>
                            <li class="nav-item">
                                <a href="/Store" class="nav-link">Only on Apple</a>
                            </li>
                            <li class="nav-item">
                                <a href="/Store" class="nav-link">Accessories</a>
                            </li>
                            <li class="nav-item">
                                <a href="/Store" class="nav-link">Support</a>
                            </li>
                            <li class="nav-item">
                                <a href="/Store" class="nav-link nav-link-search"></a> 
                            </li>
                            <li class="nav-item nav-item-hidden dropdown">
                                {/* <a href="/Store" class="nav-link nav-link-bag"> */}
                                    <button class="dropbtn nav-link nav-link-bag">                                   
                                    </button>
                                    <div class="dropdown-content">
                                        <ul>
                                            <li className='bag-icon'>
                                            <a href="/Bag">Bag</a>
                                            </li>
                                            <li className='Orders-icon'>
                                            <a href="/Store">Orders</a>
                                            </li>
                                            <li className='Account-icon'>
                                            <a href="/Member-Info">Account</a>
                                            </li>
                                            <li className='Signin-icon'>
                                            <a href="/Sign-out">Signout</a>
                                            </li>
                                        </ul>
                                        {/* <a href="/Store">Link 1</a>
                                        <a href="/Store">Link 2</a>
                                        <a href="/Store">Link 3</a> */}
                                    </div>
                                {/* </a>  */}
                            </li>
                        </ul>
                    </nav>
                </div>
           </header>
        )
    }
    // return(
    //     <header>
    //         <div class="container">
    //             <nav class="nav">
    //                 <ul class="nav-list nav-list-mobile">
    //                     <li class="nav-item">
    //                         <div class="mobile-meun">
    //                             <span class="line line-top"></span>
    //                             <span class="line line-bottom"></span>
    //                         </div>
    //                     </li>
    //                     <li class="nav-item">
    //                         <a href="/" class="nav-link nav-link-apple"></a>
    //                     </li>
    //                     <li class="nav-item">
    //                         <a href="/Store" class="nav-link nav-link-bag"></a>
    //                     </li>
    //                 </ul>
    //                 <ul class="nav-list nav-list-larger">                
    //                     <li class="nav-item nav-item-hidden">
    //                         <a href="/" class="nav-link nav-link-apple"></a>
    //                     </li>
    //                     <li class="nav-item">
    //                         <a href="/store" class="nav-link">Store</a>
    //                     </li>
    //                     <li class="nav-item">
    //                         <a href="/Store" class="nav-link">Mac</a>
    //                     </li>
    //                     <li class="nav-item">
    //                         <a href="/Store" class="nav-link">iPad</a>
    //                     </li>
    //                     <li class="nav-item">
    //                         <a href="/Store" class="nav-link">iPhone</a>
    //                     </li>
    //                     <li class="nav-item">
    //                         <a href="/Store" class="nav-link">Watch</a>
    //                     </li>
    //                     <li class="nav-item">
    //                         <a href="/Store" class="nav-link">AirPods</a>
    //                     </li>
    //                     <li class="nav-item">
    //                         <a href="/Store" class="nav-link">TV &amp; Home</a>
    //                     </li>
    //                     <li class="nav-item">
    //                         <a href="/Store" class="nav-link">Only on Apple</a>
    //                     </li>
    //                     <li class="nav-item">
    //                         <a href="/Store" class="nav-link">Accessories</a>
    //                     </li>
    //                     <li class="nav-item">
    //                         <a href="/Store" class="nav-link">Support</a>
    //                     </li>
    //                     <li class="nav-item">
    //                         <a href="/Store" class="nav-link nav-link-search"></a> 
    //                     </li>
    //                     <li class="nav-item nav-item-hidden dropdown">
    //                         {/* <a href="/Store" class="nav-link nav-link-bag"> */}
    //                             <button class="dropbtn nav-link nav-link-bag">                                   
    //                             </button>
    //                             <div class="dropdown-content">
    //                                 <ul>
    //                                     <li className='bag-icon'>
    //                                     <a href="/Bag">Bag</a>
    //                                     </li>
    //                                     <li className='Orders-icon'>
    //                                     <a href="/Store">Orders</a>
    //                                     </li>
    //                                     <li className='Account-icon'>
    //                                     <a href="/Member-Info">Account</a>
    //                                     </li>
    //                                     <li className='Signin-icon'>
    //                                     <a href="/Sign-in">Signin</a>
    //                                     </li>
    //                                 </ul>
    //                                 {/* <a href="/Store">Link 1</a>
    //                                 <a href="/Store">Link 2</a>
    //                                 <a href="/Store">Link 3</a> */}
    //                             </div>
    //                         {/* </a>  */}
    //                     </li>
    //                 </ul>
    //             </nav>
    //         </div>
    //    </header>
    // )
}

export default Navbar;