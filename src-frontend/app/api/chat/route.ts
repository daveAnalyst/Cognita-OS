// src-frontend/app/api/chat/route.ts
import { NextResponse } from 'next/server';

// Enhanced mock responses for demo
const getEnhancedResponse = (prompt: string, lens: string = 'Scholar'): string => {
  const lowerPrompt = prompt.toLowerCase();
  
  // Scholar Lens Responses
  if (lens === 'Scholar') {
    if (lowerPrompt.includes('mitosis') || lowerPrompt.includes('cell division')) {
      return `📚 **Scholar Analysis**: Excellent question about mitosis! From your Biology_Chapter_4.pdf, I can see this connects to several key concepts:

**Phase Breakdown:**
• **Prophase**: Chromatin condenses into visible chromosomes, nuclear envelope dissolves
• **Metaphase**: Chromosomes align at the cell's equatorial plane (metaphase plate)
• **Anaphase**: Sister chromatids separate and move to opposite poles
• **Telophase**: Nuclear envelopes reform around each set of chromosomes

**Cross-Reference**: This process ensures genetic fidelity - each daughter cell receives an identical copy of the parent's DNA. This relates to your notes on heredity and genetic stability.

Would you like me to elaborate on the molecular mechanisms or connect this to meiosis?`;
    }
    
    if (lowerPrompt.includes('french revolution') || lowerPrompt.includes('revolution')) {
      return `📚 **Scholar Analysis**: Based on your French_Revolution_Notes.txt, I've identified the interconnected causal factors:

**Economic Triggers:**
• National debt crisis (4.6 billion livres by 1789)
• Tax system inequality (clergy & nobility exempt)
• Poor harvests leading to bread shortages

**Social Structure:**
• Ancien Régime's rigid class system
• Rising bourgeoisie demanding political representation
• Peasant grievances against feudal obligations

**Intellectual Catalysts:**
• Enlightenment ideas (Rousseau, Voltaire, Montesquieu)
• American Revolution's influence on democratic ideals

**Insight**: Your notes show similar patterns in other historical revolutions - economic stress + social inequality + new ideas = revolutionary conditions.`;
    }
    
    if (lowerPrompt.includes('photosynthesis')) {
      return `📚 **Scholar Analysis**: From your biology materials, photosynthesis is a masterclass in energy conversion:

**Light-Dependent Reactions (Thylakoids):**
• Photosystem II captures photons, splits H₂O → O₂ + H⁺ + e⁻
• Electron transport chain creates ATP via chemiosmotic gradient
• Photosystem I produces NADPH

**Calvin Cycle (Stroma):**
• CO₂ fixation via RuBisCO enzyme
• ATP & NADPH reduce 3-carbon compounds
• Glucose synthesis through complex carbon rearrangements

**Overall equation**: 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂

**Connection**: This complements cellular respiration perfectly - photosynthesis stores energy, respiration releases it.`;
    }
    
    if (lowerPrompt.includes('explain') || lowerPrompt.includes('how') || lowerPrompt.includes('what')) {
      return `📚 **Scholar Analysis**: I'm analyzing your question through my research-focused lens. Let me break this down systematically:

Based on the context "${prompt.substring(0, 50)}...", I'm cross-referencing this with your knowledge base to provide comprehensive insights.

**Methodical Approach:**
• First, I'll establish the foundational concepts
• Then connect to related topics in your Second Brain
• Finally, synthesize this into actionable understanding

Your question touches on several interconnected themes that I can explore further. What specific aspect would you like me to dive deeper into?`;
    }
  }
  
  // Muse Lens Responses
  if (lens === 'Muse') {
    if (lowerPrompt.includes('creative') || lowerPrompt.includes('story') || lowerPrompt.includes('write')) {
      return `🎨 **Muse Inspiration**: Oh, the creative spark! Your question ignites so many possibilities...

**Imaginative Angles:**
What if we approached "${prompt.substring(0, 30)}..." like a jazz musician approaches a solo? You know the structure, but the magic happens in the improvisation!

**Creative Connections:**
Your Creative_Writing_Ideas.md suggests you're drawn to themes of transformation - just like how your French Revolution notes explore societal metamorphosis. There's poetry in that parallel!

**Wild Ideas:**
• What if this concept was a character in a story?
• How would this look from an alien's perspective?
• If this was a color, what would it feel like?

Sometimes the most breakthrough ideas come from asking "What if?" in the most unexpected ways. What wild direction shall we explore?`;
    }
    
    if (lowerPrompt.includes('connection') || lowerPrompt.includes('relate')) {
      return `🎨 **Muse Inspiration**: Connections are the universe's poetry! I see beautiful threads weaving through your question...

Like a spider's web glistening with morning dew, ideas connect in ways that logic alone can't predict. Your question about "${prompt.substring(0, 40)}..." reminds me of how jazz musicians quote different melodies within a single solo.

**Creative Cross-Pollination:**
Your biology notes dance with your historical analysis - both explore systems in transformation! Cell division and social revolution are both stories of growth, change, and new beginnings.

Let's follow this thread wherever it leads - sometimes the most unexpected connections reveal the deepest truths!`;
    }
    
    return `🎨 **Muse Inspiration**: What a delightfully intriguing question! "${prompt.substring(0, 40)}..." sparks my imagination like lightning illuminating a landscape.

I see patterns dancing, ideas colliding like particles in a cosmic ballet. Your question has layers - like an onion made of stardust and curiosity!

**Creative Reframing:**
Instead of just answering, what if we explored this like artists exploring a new medium? What if we approached this challenge with the playfulness of a child and the wisdom of ancient storytellers?

Your Second Brain whispers of connections between seemingly unrelated concepts. Let's paint outside the lines and see what masterpiece emerges!`;
  }
  
  // Reflective Lens (Preview)
  if (lens === 'Reflective') {
    return `🧘 **Reflective Lens Preview**: This powerful feature combines CBT techniques with AI insight to help you understand not just what you think, but how you think.

**What Reflective Lens Will Offer:**
• Metacognitive awareness of thought patterns
• Gentle questioning to explore assumptions
• Recognition of cognitive biases and emotional triggers
• Personalized strategies for mental clarity

**Example Interaction:**
"I notice you're asking about ${prompt.substring(0, 30)}... What emotions come up when you think about this topic? What assumptions might you be carrying?"

This lens will be your private, judgment-free thinking partner - coming in Wise V2.`;
  }
  
  // Default intelligent response
  return `💭 **${lens} Perspective**: Thank you for that thoughtful question! 

"${prompt.substring(0, 60)}${prompt.length > 60 ? '...' : ''}"

I'm processing this through my ${lens.toLowerCase()} reasoning mode, analyzing it against your personal knowledge base. This approach helps me provide insights that are specifically tailored to your thinking style and accumulated understanding.

**Processing Context:**
• Cross-referencing with your Second Brain documents
• Identifying related concepts and patterns
• Generating contextual insights based on your knowledge graph

What specific aspect would you like me to explore further with my ${lens} lens?`;
};

export async function POST(request: Request) {
  try {
    const { prompt, lens = 'Scholar' } = await request.json();
    
    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' }, 
        { status: 400 }
      );
    }

    // Simulate realistic AI processing time
    const processingTime = 1200 + Math.random() * 1800; // 1.2-3 seconds
    await new Promise(resolve => setTimeout(resolve, processingTime));

    // Generate enhanced response based on lens and content
    const response = getEnhancedResponse(prompt, lens);

    return NextResponse.json({ 
      response,
      lens_used: lens,
      processing_time: Math.round(processingTime),
      knowledge_base_consulted: true
    });

  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    );
  }
}