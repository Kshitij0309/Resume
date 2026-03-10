import React, { useRef, useEffect, useState } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import { useAppState } from '../../context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const DimensionalMap = () => {
    const { isMapOpen, setIsMapOpen, setCurrentSection } = useAppState();
    const graphRef = useRef();

    const [data] = useState({
        nodes: [
            { id: 'CENTER', name: 'KSHITIJ MISHRA', val: 20, color: '#e50914' },
            { id: 'ABOUT', name: 'ABOUT', val: 12, color: '#e50914' },
            { id: 'PROJECTS', name: 'PROJECTS', val: 12, color: '#e50914' },
            { id: 'PROOF_OF_WORK', name: 'PROOF OF WORK', val: 12, color: '#e50914' },
            { id: 'SKILLS', name: 'SKILLS', val: 12, color: '#e50914' },
            { id: 'CONTACT', name: 'CONTACT', val: 12, color: '#e50914' },
            { id: 'GITHUB', name: 'GITHUB', val: 14, color: '#e50914' },
            { id: 'UPSIDE_DOWN', name: 'UPSIDE DOWN', val: 12, color: '#8b0000' },
            { id: 'P1', name: 'AI Fraud Detection', val: 8, color: '#8b0000', parent: 'PROJECTS' },
            { id: 'P2', name: 'Health Tracker', val: 8, color: '#8b0000', parent: 'PROJECTS' },
            { id: 'P3', name: 'Notification Logger', val: 8, color: '#8b0000', parent: 'PROJECTS' },
        ],
        links: [
            { source: 'CENTER', target: 'ABOUT' },
            { source: 'CENTER', target: 'PROJECTS' },
            { source: 'CENTER', target: 'PROOF_OF_WORK' },
            { source: 'CENTER', target: 'SKILLS' },
            { source: 'CENTER', target: 'CONTACT' },
            { source: 'CENTER', target: 'GITHUB' },
            { source: 'CENTER', target: 'UPSIDE_DOWN' },
            { source: 'PROJECTS', target: 'P1' },
            { source: 'PROJECTS', target: 'P2' },
            { source: 'PROJECTS', target: 'P3' },
        ]
    });

    if (!isMapOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex flex-col"
            >
                <div className="p-6 flex justify-between items-center z-10">
                    <h2 className="text-3xl font-bold title-font text-accent-red neon-text">DIMENSIONAL MAP</h2>
                    <button
                        onClick={() => setIsMapOpen(false)}
                        className="p-2 text-white hover:text-accent-red transition-colors"
                    >
                        <X size={32} />
                    </button>
                </div>

                <div className="flex-grow relative">
                    <ForceGraph2D
                        ref={graphRef}
                        graphData={data}
                        nodeLabel="name"
                        nodeRelSize={6}
                        nodeColor={n => n.color}
                        linkColor={() => 'rgba(229, 9, 20, 0.4)'}
                        linkWidth={2}
                        nodeCanvasObject={(node, ctx, globalScale) => {
                            const label = node.name;
                            const fontSize = 12 / globalScale;
                            ctx.font = `${fontSize}px Inter`;
                            const textWidth = ctx.measureText(label).width;
                            const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.2);

                            // Draw glow
                            ctx.shadowColor = node.color;
                            ctx.shadowBlur = 10;
                            ctx.fillStyle = node.color;
                            ctx.beginPath();
                            ctx.arc(node.x, node.y, 4, 0, 2 * Math.PI, false);
                            ctx.fill();

                            // Draw text
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';
                            ctx.fillStyle = 'white';
                            ctx.fillText(label, node.x, node.y + 10);
                        }}
                        onNodeClick={(node) => {
                            if (['ABOUT', 'PROJECTS', 'PROOF_OF_WORK', 'SKILLS', 'CONTACT'].includes(node.id)) {
                                setCurrentSection(node.id.toLowerCase());
                                setIsMapOpen(false);
                            } else if (node.id === 'GITHUB') {
                                window.open('https://github.com/kshitij0309', '_blank');
                            }
                        }}
                        backgroundColor="#000000"
                    />
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default DimensionalMap;
