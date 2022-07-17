import { Link } from '@inertiajs/inertia-react';
import Avatar from 'avataaars'



const Navbar = ({ user }) => {
    console.log('is user', user);
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Portal Berita</a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered" />
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <Avatar style={{ width: '100%', height: '100%' }}
                                avatarStyle='Circle'
                                topType='ShortHairShortWaved'
                                accessoriesType='Sunglasses'
                                hairColor='Black'
                                facialHairType='BeardLight'
                                facialHairColor='Black'
                                clotheType='BlazerShirt'
                                eyeType='Default'
                                eyebrowType='FlatNatural'
                                mouthType='Smile'
                                skinColor='Light'
                            />
                        </div>
                    </label>
                    <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        {!user ?
                            <>
                                <li><Link href={route('login')} as='button'>Login</Link></li>
                                <li><Link href={route('register')} as='button'>Register</Link></li>
                            </>
                            :
                            <>
                                <li>
                                    <Link href={route('dashboard')} as='button' className="justify-between">
                                        Dashboard
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li><Link>Settings</Link></li>
                                <li><Link href={route('logout')} method='post' as='button'>Logout</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar