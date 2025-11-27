import { useRef, Suspense } from 'react'
import { useParams, Link } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import NotFound from '../NotFound';
import { products } from './data';
import { Md3dRotation } from "react-icons/md";

const ModelViewer = ({ url }: { url: string }) => {
    const model = useGLTF(url); // ✅ No try/catch

    return <primitive object={model.scene} scale={1} />;
};


const ThreeDViewer = ({ modelUrl }: { modelUrl: string }) => {
    return (
        <div className="w-full h-96 md:h-[600px] bg-gray-100 rounded-xl overflow-hidden shadow-inner">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <Suspense fallback={<ModelLoadingIndicator />}>
                    <Environment preset="city" />
                    <ModelViewer url={modelUrl} />
                </Suspense>

                <ambientLight intensity={2.5} castShadow />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <OrbitControls enablePan enableZoom enableRotate />
            </Canvas>
        </div>
    );
};


const ModelLoadingIndicator = () => {
    const mesh = useRef<any>(null);
    useFrame(() => (mesh.current.rotation.y += 0.01));

    return (
        <mesh ref={mesh} position={[0, 0, 0]}>
            <sphereGeometry args={[1, 20, 20]} />
            <meshStandardMaterial color="hsl(200, 70%, 50%)" wireframe={true} />
        </mesh>
    );
};


const Product = () => {
    const { id } = useParams();
    const productId = Number(id);
    const product = products.find(p => p?.id === productId);

    useGLTF.preload(product?.model || '');

    if (!product) {
        return <NotFound />;
    }

    return (
        <div className="mx-auto py-8 w-full">
            <Link to="/" className="text-blue-600 hover:text-blue-800 flex items-center mb-6">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                Back to Home
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-6 md:p-10 rounded-xl shadow-sm">
                {/* 3D Viewer Section */}
                <div>
                    <h1 className="text-3xl font-extrabold text-gray-900 mb-4">{product.name} (3D Model)</h1>
                    <p className="text-gray-600 mb-4 flex items-center">
                        <Md3dRotation className="w-4 h-4 mr-2 text-blue-500" />
                        Drag to rotate, scroll to zoom, CTRL to move.
                    </p>
                    <ThreeDViewer modelUrl={product?.model} />
                </div>

                {/* Product Details Section */}
                <div className="lg:sticky lg:top-20 self-start">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-4">{product.name}</h2>
                    <p className="text-5xl font-bold text-green-600 mb-6">${product.price.toFixed(2)}</p>

                    <div className="mb-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Description</h3>
                        <p className="text-gray-700 leading-relaxed">{product.description}</p>
                    </div>

                    <div className="flex items-center text-yellow-500 text-2xl mb-8">
                        {'★'.repeat(Math.floor(product.rating))}
                        {'☆'.repeat(5 - Math.floor(product.rating))}
                        <span className="ml-3 text-lg font-medium text-gray-600">Rating: {product.rating} / 5</span>
                    </div>

                    <button className='w-full px-8 py-3 text-lg font-semibold rounded-full text-white bg-gray-900 hover:bg-gray-700 transition duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50'>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;

