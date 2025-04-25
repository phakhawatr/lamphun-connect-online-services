
import React, { useState, useEffect } from "react";
import { Bell, Download, Heart, Search, ChevronDown, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const OrganizationStructure = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [sortOption, setSortOption] = useState("relevance");
  const [priceSort, setPriceSort] = useState("low-to-high");

  useEffect(() => {
    // Animation for page entry
    setIsVisible(true);
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const experiences = [
    {
      id: 1,
      title: "Best of Maui Tour",
      image: "https://source.unsplash.com/random/400x300/?hawaii",
      collection: "COLLECTION",
      rating: 4.8,
      reviews: 1047,
      originalPrice: 150,
      discount: 50,
      finalPrice: 130,
      peopleViewing: 56,
      tags: ["10% Cashback"],
    },
    {
      id: 2,
      title: "Snorkeling Adventure at Turtle Canyon",
      image: "https://source.unsplash.com/random/400x300/?snorkeling",
      collection: "COLLECTION",
      rating: 4.7,
      reviews: 1142,
      originalPrice: 550,
      discount: 45,
      finalPrice: 345,
      peopleViewing: 112,
    },
    {
      id: 3,
      title: "Aquaventure Waterpark",
      image: "https://source.unsplash.com/random/400x300/?waterpark",
      collection: "COLLECTION",
      rating: 4.9,
      reviews: 850,
      originalPrice: 350,
      discount: 25,
      finalPrice: 213,
      peopleViewing: 345,
      tags: ["3 Seats Left"],
    },
    {
      id: 4,
      title: "Legoland & Water Park Combo",
      image: "https://source.unsplash.com/random/400x300/?legoland",
      collection: "COLLECTION",
      rating: 4.6,
      reviews: 1248,
      originalPrice: 400,
      discount: 70,
      finalPrice: 267,
      peopleViewing: 98,
    },
    {
      id: 5,
      title: "Mandalay Bay Beach Fireworks and Food Party",
      image: "https://source.unsplash.com/random/400x300/?fireworks",
      collection: "COLLECTION",
      rating: 4.8,
      reviews: 1265,
      originalPrice: 400,
      discount: 70,
      finalPrice: 253,
      peopleViewing: 98,
    },
    {
      id: 6,
      title: "Pirate Adventures Sightseeing Rafting",
      image: "https://source.unsplash.com/random/400x300/?rafting",
      collection: "COLLECTION",
      rating: 4.9,
      reviews: 1142,
      originalPrice: 550,
      discount: 45,
      finalPrice: 345,
      peopleViewing: 112,
    },
    {
      id: 7,
      title: "Online Games How To Play To Win",
      image: "https://source.unsplash.com/random/400x300/?gaming",
      collection: "COLLECTION",
      rating: 4.8,
      reviews: 1047,
      originalPrice: 150,
      discount: 50,
      finalPrice: 130,
      peopleViewing: 56,
    },
    {
      id: 8,
      title: "Copper Canyon",
      image: "https://source.unsplash.com/random/400x300/?canyon",
      collection: "COLLECTION",
      rating: 4.7,
      reviews: 1142,
      originalPrice: 550,
      discount: 45,
      finalPrice: 345,
      peopleViewing: 112,
    },
    {
      id: 9,
      title: "Global Resorts Network Gm Putting Timeshares To Shame",
      image: "https://source.unsplash.com/random/400x300/?resort",
      collection: "COLLECTION",
      rating: 4.9,
      reviews: 850,
      originalPrice: 350,
      discount: 25,
      finalPrice: 213,
      peopleViewing: 345,
    },
    {
      id: 10,
      title: "Traveling to the Hills",
      image: "https://source.unsplash.com/random/400x300/?hills",
      collection: "COLLECTION",
      rating: 4.8,
      reviews: 1047,
      originalPrice: 200,
      discount: 50,
      finalPrice: 145,
      peopleViewing: 256,
    },
    {
      id: 11,
      title: "Coventry City Guide Including Coventry Hotels",
      image: "https://source.unsplash.com/random/400x300/?city",
      collection: "COLLECTION",
      rating: 4.6,
      reviews: 982,
      originalPrice: 400,
      discount: 17,
      finalPrice: 340,
      peopleViewing: 102,
    },
    {
      id: 12,
      title: "Trip To Iqaluit In Nunavut A Canadian Arctic City",
      image: "https://source.unsplash.com/random/400x300/?arctic",
      collection: "COLLECTION",
      rating: 4.7,
      reviews: 1073,
      originalPrice: 650,
      discount: 22,
      finalPrice: 521,
      peopleViewing: 145,
    },
  ];

  const toggleFilter = (filter: string) => {
    if (activeFilter === filter) {
      setActiveFilter(null);
    } else {
      setActiveFilter(filter);
    }
  };

  return (
    <div className={`min-h-screen bg-white transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Banner */}
      <div className="relative h-[40vh] w-full">
        <img 
          src="/lovable-uploads/333c2a62-641b-4217-b94e-1b5a00c23e27.png" 
          alt="Water Adventures Banner" 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center px-8 md:px-16">
          <div className="text-white">
            <p className="text-sm md:text-base breadcrumbs">
              <Link to="/">Home</Link> &gt; <Link to="/">Your Collections</Link> &gt; <span>Collection Name</span>
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mt-2">Water Adventures</h1>
            <div className="mt-3 flex items-center space-x-2">
              <p className="text-sm md:text-base">120 Experiences in New York</p>
              <ChevronDown size={16} />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left sidebar with filters */}
          <div className="w-full md:w-1/4">
            <div className="sticky top-20">
              <h2 className="text-lg font-bold uppercase mb-4">FILTERS</h2>
              <button className="text-sm text-gray-500 hover:text-blue-500 mb-6">Reset</button>

              {/* Collections filter */}
              <Collapsible open={activeFilter === 'collections'} className="mb-6">
                <CollapsibleTrigger 
                  className="flex w-full items-center justify-between py-2 font-medium"
                  onClick={() => toggleFilter('collections')}
                >
                  Collections
                  <ChevronDown 
                    size={20} 
                    className={`transition-transform ${activeFilter === 'collections' ? 'rotate-180' : ''}`} 
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-2 space-y-2">
                  <div className="flex items-center gap-2 hover:text-blue-500">
                    <span>Broadway</span>
                    <span className="text-xs text-gray-500">(23)</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-500 font-medium">
                    <span>Water Adventures</span>
                    <span className="text-xs">(120)</span>
                  </div>
                  <div className="flex items-center gap-2 hover:text-blue-500">
                    <span>Adventures</span>
                    <span className="text-xs text-gray-500">(67)</span>
                  </div>
                  <div className="flex items-center gap-2 hover:text-blue-500">
                    <span>Sport Shows</span>
                    <span className="text-xs text-gray-500">(35)</span>
                  </div>
                  <div className="flex items-center gap-2 hover:text-blue-500">
                    <span>Road Tours</span>
                    <span className="text-xs text-gray-500">(76)</span>
                  </div>
                  <div className="flex items-center gap-2 hover:text-blue-500">
                    <span>Mountain & Hills</span>
                    <span className="text-xs text-gray-500">(13)</span>
                  </div>
                  <div className="text-blue-500 text-sm mt-2">+2 more</div>
                </CollapsibleContent>
              </Collapsible>

              {/* Price Range filter */}
              <Collapsible open={activeFilter === 'price'} className="mb-6">
                <CollapsibleTrigger 
                  className="flex w-full items-center justify-between py-2 font-medium"
                  onClick={() => toggleFilter('price')}
                >
                  Price Range
                  <ChevronDown 
                    size={20} 
                    className={`transition-transform ${activeFilter === 'price' ? 'rotate-180' : ''}`} 
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-4">
                  <div className="bg-gray-100 h-2 rounded-full mb-4 relative">
                    <div className="absolute top-0 left-1/4 right-3/4 h-2 bg-blue-500 rounded-full"></div>
                    <div className="absolute top-0 left-1/4 h-4 w-4 bg-white rounded-full border border-gray-300 -translate-y-1/4"></div>
                    <div className="absolute top-0 right-1/4 h-4 w-4 bg-white rounded-full border border-gray-300 -translate-y-1/4"></div>
                  </div>
                  <div className="flex justify-between">
                    <div className="w-20 border py-1 px-2 rounded text-center text-sm">$120</div>
                    <div className="w-20 border py-1 px-2 rounded text-center text-sm">$855</div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Checkbox id="value-packs" className="text-blue-500 border-blue-500" />
                      <label htmlFor="value-packs" className="text-sm cursor-pointer text-blue-500 font-medium">Value Packs</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="budget-packs" />
                      <label htmlFor="budget-packs" className="text-sm cursor-pointer">Budget Packs</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="exclusive-deals" />
                      <label htmlFor="exclusive-deals" className="text-sm cursor-pointer">Exclusive Deals</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="premium-grabs" />
                      <label htmlFor="premium-grabs" className="text-sm cursor-pointer">Premium Grabs</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="luxurious" />
                      <label htmlFor="luxurious" className="text-sm cursor-pointer">Luxurious</label>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              {/* Select Dates filter */}
              <Collapsible open={activeFilter === 'dates'} className="mb-6">
                <CollapsibleTrigger 
                  className="flex w-full items-center justify-between py-2 font-medium"
                  onClick={() => toggleFilter('dates')}
                >
                  Select Dates
                  <ChevronDown 
                    size={20} 
                    className={`transition-transform ${activeFilter === 'dates' ? 'rotate-180' : ''}`} 
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-2">
                  <div className="border rounded p-2 text-center text-sm text-gray-500 mb-4">
                    December 2018
                  </div>
                  
                  <div className="grid grid-cols-7 gap-1 text-center text-sm">
                    <div className="p-1">S</div>
                    <div className="p-1">M</div>
                    <div className="p-1">T</div>
                    <div className="p-1">W</div>
                    <div className="p-1">T</div>
                    <div className="p-1">F</div>
                    <div className="p-1">S</div>
                    
                    <div className="p-1">17</div>
                    <div className="p-1">18</div>
                    <div className="p-1">19</div>
                    <div className="p-1 bg-blue-500 text-white rounded-full">20</div>
                    <div className="p-1">21</div>
                    <div className="p-1">22</div>
                    <div className="p-1">23</div>
                    
                    <div className="p-1">24</div>
                    <div className="p-1">25</div>
                    <div className="p-1">26</div>
                    <div className="p-1">27</div>
                    <div className="p-1">28</div>
                    <div className="p-1">29</div>
                    <div className="p-1">30</div>
                    
                    <div className="p-1">31</div>
                    <div className="p-1 text-gray-300">1</div>
                    <div className="p-1 text-gray-300">2</div>
                    <div className="p-1 text-gray-300">3</div>
                    <div className="p-1 text-gray-300">4</div>
                    <div className="p-1 text-gray-300">5</div>
                    <div className="p-1 text-gray-300">6</div>
                    
                    <div className="p-1 text-gray-300">7</div>
                    <div className="p-1 text-gray-300">8</div>
                    <div className="p-1 text-gray-300">9</div>
                    <div className="p-1 text-gray-300">10</div>
                    <div className="p-1 text-gray-300">11</div>
                    <div className="p-1 text-gray-300">12</div>
                    <div className="p-1 text-gray-300">13</div>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              {/* Event Time filter */}
              <Collapsible open={activeFilter === 'time'} className="mb-6">
                <CollapsibleTrigger 
                  className="flex w-full items-center justify-between py-2 font-medium"
                  onClick={() => toggleFilter('time')}
                >
                  Event Time
                  <ChevronDown 
                    size={20} 
                    className={`transition-transform ${activeFilter === 'time' ? 'rotate-180' : ''}`} 
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-2 space-y-3">
                  <div className="flex items-center gap-2">
                    <Checkbox id="morning" />
                    <div>
                      <label htmlFor="morning" className="text-sm cursor-pointer">Morning</label>
                      <p className="text-xs text-gray-500">06:00 am to 12:00 pm</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="afternoon" />
                    <div>
                      <label htmlFor="afternoon" className="text-sm cursor-pointer">Afternoon</label>
                      <p className="text-xs text-gray-500">12:01 pm to 05:59 pm</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="evening" />
                    <div>
                      <label htmlFor="evening" className="text-sm cursor-pointer">Evening</label>
                      <p className="text-xs text-gray-500">06:00 pm to 11:59 pm</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="night" />
                    <div>
                      <label htmlFor="night" className="text-sm cursor-pointer">Night</label>
                      <p className="text-xs text-gray-500">12:00 am to 05:59 am</p>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              {/* Duration filter */}
              <Collapsible open={activeFilter === 'duration'} className="mb-6">
                <CollapsibleTrigger 
                  className="flex w-full items-center justify-between py-2 font-medium"
                  onClick={() => toggleFilter('duration')}
                >
                  Duration
                  <ChevronDown 
                    size={20} 
                    className={`transition-transform ${activeFilter === 'duration' ? 'rotate-180' : ''}`} 
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-2 space-y-2">
                  <div className="flex items-center gap-2">
                    <Checkbox id="less-than-1" />
                    <label htmlFor="less-than-1" className="text-sm cursor-pointer">less than 1 hour</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="1-2-hours" />
                    <label htmlFor="1-2-hours" className="text-sm cursor-pointer">1 - 2 hours</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="2-4-hours" />
                    <label htmlFor="2-4-hours" className="text-sm cursor-pointer">2 - 4 hours</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="more-than-4" />
                    <label htmlFor="more-than-4" className="text-sm cursor-pointer">more than 4 hours</label>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>

          {/* Right content area */}
          <div className="w-full md:w-3/4">
            {/* Top filters */}
            <div className="flex flex-wrap gap-2 mb-6">
              <Button variant="outline" size="sm" className="flex items-center gap-1 hover:bg-gray-100">
                Filter <Filter size={14} />
              </Button>
              <Button variant="outline" size="sm" className="hover:bg-gray-100">22th Dec 2018</Button>
              <Button variant="outline" size="sm" className="hover:bg-gray-100">Group Size</Button>
              <Button variant="outline" size="sm" className="hover:bg-gray-100">More Filters</Button>
              <Button variant="ghost" size="sm" className="ml-auto text-gray-500 hover:text-blue-500">Reset</Button>
            </div>

            {/* Sorting options */}
            <div className="flex flex-wrap justify-between items-center mb-8 border-b pb-4">
              <div className="flex items-center gap-4">
                <span className="text-sm">PRICE</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className={priceSort === 'low-to-high' ? 'text-blue-500 font-medium' : ''}
                  onClick={() => setPriceSort('low-to-high')}
                >
                  Low to High
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className={priceSort === 'high-to-low' ? 'text-blue-500 font-medium' : ''}
                  onClick={() => setPriceSort('high-to-low')}
                >
                  High to Low
                </Button>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-sm">SORT BY</span>
                <div className="relative group">
                  <Button variant="ghost" size="sm" className="flex items-center gap-1">
                    {sortOption.charAt(0).toUpperCase() + sortOption.slice(1)}
                    <ChevronDown size={14} className="text-blue-500" />
                  </Button>
                  
                  <div className="absolute right-0 z-30 w-40 bg-white border shadow-lg rounded-md p-2 hidden group-hover:block hover:block">
                    <button 
                      className="w-full text-left px-2 py-1.5 text-sm hover:bg-gray-100 rounded"
                      onClick={() => setSortOption('newest')}
                    >
                      Newest
                    </button>
                    <button 
                      className="w-full text-left px-2 py-1.5 text-sm hover:bg-gray-100 rounded"
                      onClick={() => setSortOption('popularity')}
                    >
                      Popularity
                    </button>
                    <button 
                      className="w-full text-left px-2 py-1.5 text-sm hover:bg-gray-100 rounded"
                      onClick={() => setSortOption('relevance')}
                    >
                      Relevance
                    </button>
                    <button 
                      className="w-full text-left px-2 py-1.5 text-sm hover:bg-gray-100 rounded"
                      onClick={() => setSortOption('rating')}
                    >
                      Rating
                    </button>
                    <button 
                      className="w-full text-left px-2 py-1.5 text-sm hover:bg-gray-100 rounded"
                      onClick={() => setSortOption('discount')}
                    >
                      Discount
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experiences.map((experience) => (
                <Card key={experience.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <img 
                      src={experience.image} 
                      alt={experience.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <button 
                      className="absolute top-2 right-2 h-8 w-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100"
                      aria-label="Add to wishlist"
                    >
                      <Heart size={18} className="text-gray-400 hover:text-red-500 transition-colors" />
                    </button>
                    
                    {experience.tags && experience.tags.map((tag, index) => (
                      <div 
                        key={index}
                        className="absolute top-2 left-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                  
                  <CardContent className="pt-4 pb-2">
                    <p className="text-xs text-gray-500">{experience.collection}</p>
                    <h3 className="font-medium mt-1 line-clamp-2 group-hover:text-blue-500 transition-colors">
                      {experience.title}
                    </h3>
                    
                    <div className="flex items-center gap-1 mt-2">
                      <div className="bg-amber-400 text-white text-xs px-1.5 py-0.5 rounded">
                        {experience.rating}
                      </div>
                      <span className="text-xs text-gray-500">({experience.reviews} Reviews)</span>
                    </div>
                    
                    <div className="flex items-end gap-2 mt-3">
                      <div className="text-xs text-gray-500 line-through">${experience.originalPrice}</div>
                      <div className="text-xs text-green-600">save upto {experience.discount}% off</div>
                    </div>
                    
                    <div className="text-xl font-bold mt-1 text-gray-800">${experience.finalPrice}</div>
                  </CardContent>
                  
                  <CardFooter className="pt-0 pb-3">
                    <div className="text-xs text-gray-500 flex items-center gap-1">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
                      {experience.peopleViewing} people viewing now
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationStructure;
