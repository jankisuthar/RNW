import React from 'react';

function EditData(props) {
    const [updateitems, setupadteItems] = useState(fasle);
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <input type="text"

                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input type="password"

                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="btn-container">
                    <button>Add-Data</button>
                </div>
            </form>
        </div>
    );
}

export default EditData;