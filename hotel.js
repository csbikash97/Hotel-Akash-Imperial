// script.js
// Vanilla JavaScript – Hotel booking form with realtime validation, no backend

'use strict';

// ---------- DOM ELEMENTS ----------
const form = document.getElementById('hotelBookingForm');
const checkinInput = document.getElementById('checkin');
const checkoutInput = document.getElementById('checkout');
const roomTypeSelect = document.getElementById('roomType');
const adultsSelect = document.getElementById('adults');
const childrenSelect = document.getElementById('children');
const submitBtn = document.getElementById('submitBtn');
const successMsg = document.getElementById('successMessage');

// error containers
const checkinError = document.getElementById('checkinError');
const checkoutError = document.getElementById('checkoutError');
const roomTypeError = document.getElementById('roomTypeError');

// ---------- HELPER: get today's date in YYYY-MM-DD ----------
function getTodayString() {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// ---------- DISABLE PAST DATES (no past bookings) ----------
function setDateConstraints() {
    const today = getTodayString();
    checkinInput.setAttribute('min', today);
    
    // if check-in already has value, update checkout min accordingly
    if (checkinInput.value) {
        checkoutInput.setAttribute('min', checkinInput.value);
    } else {
        checkoutInput.setAttribute('min', today);
    }
}

// ---------- DYNAMIC: set minimum checkout based on check-in ----------
function updateCheckoutMin() {
    const checkinDate = checkinInput.value;
    if (checkinDate) {
        checkoutInput.setAttribute('min', checkinDate);
        
        // if current checkout value is before checkin, reset it
        if (checkoutInput.value && checkoutInput.value < checkinDate) {
            checkoutInput.value = checkinDate;
        }
    }
}

// ---------- VALIDATION ENGINE ----------
function validateCheckin() {
    const value = checkinInput.value;
    if (!value) {
        showError(checkinInput, checkinError, 'Check-in date is required');
        return false;
    }
    const today = getTodayString();
    if (value < today) {
        showError(checkinInput, checkinError, 'Past dates are not allowed');
        return false;
    }
    clearError(checkinInput, checkinError);
    return true;
}

function validateCheckout() {
    const checkoutVal = checkoutInput.value;
    if (!checkoutVal) {
        showError(checkoutInput, checkoutError, 'Check-out date is required');
        return false;
    }
    const checkinVal = checkinInput.value;
    if (!checkinVal) {
        showError(checkoutInput, checkoutError, 'Please select check-in date first');
        return false;
    }
    if (checkoutVal <= checkinVal) {
        showError(checkoutInput, checkoutError, 'Check-out must be after check-in');
        return false;
    }
    clearError(checkoutInput, checkoutError);
    return true;
}

function validateRoomType() {
    if (!roomTypeSelect.value) {
        showError(roomTypeSelect, roomTypeError, 'Please select a room type');
        return false;
    }
    clearError(roomTypeSelect, roomTypeError);
    return true;
}

// generic error display
function showError(inputElement, errorElement, message) {
    inputElement.classList.add('invalid');
    errorElement.textContent = message;
    errorElement.setAttribute('aria-hidden', 'false');
}

function clearError(inputElement, errorElement) {
    inputElement.classList.remove('invalid');
    errorElement.textContent = '';
    errorElement.setAttribute('aria-hidden', 'true');
}

// real-time validation triggers
function attachLiveValidation() {
    checkinInput.addEventListener('change', function() {
        validateCheckin();
        updateCheckoutMin();   // dynamic constraint
        if (checkoutInput.value) validateCheckout();
    });
    
    checkinInput.addEventListener('blur', validateCheckin);
    
    checkoutInput.addEventListener('input', function() {
        if (checkoutInput.value) validateCheckout();
    });
    checkoutInput.addEventListener('blur', validateCheckout);
    checkoutInput.addEventListener('change', validateCheckout);
    
    roomTypeSelect.addEventListener('change', validateRoomType);
    roomTypeSelect.addEventListener('blur', validateRoomType);
}

// ---------- RESET FORM to pristine state ----------
function resetFormAfterSuccess() {
    form.reset();
    
    // remove all invalid classes and error messages
    const allInputs = [checkinInput, checkoutInput, roomTypeSelect];
    allInputs.forEach(input => input.classList.remove('invalid'));
    checkinError.textContent = '';
    checkoutError.textContent = '';
    roomTypeError.textContent = '';
    
    // reset date constraints
    setDateConstraints();
    
    // explicitly set default selects
    adultsSelect.value = '2';
    childrenSelect.value = '0';
    roomTypeSelect.value = '';
    
    // hide success message after 6 seconds but we handle in flow
}

// ---------- SUBMIT HANDLER with loading animation and success ----------
function handleSubmit(e) {
    e.preventDefault();
    
    // run all validations
    const isCheckinValid = validateCheckin();
    const isCheckoutValid = validateCheckout();
    const isRoomValid = validateRoomType();
    
    if (!isCheckinValid || !isCheckoutValid || !isRoomValid) {
        // scroll to first error softly
        const firstInvalid = document.querySelector('.form-input.invalid');
        if (firstInvalid) {
            firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
    }
    
    // ---------- LOADING animation ----------
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    
    // simulate async booking (no backend)
    setTimeout(() => {
        // success message
        successMsg.hidden = false;
        
        // remove loading state
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        
        // reset form after success
        resetFormAfterSuccess();
        
        // auto-hide success message after 5 seconds
        setTimeout(() => {
            successMsg.hidden = true;
        }, 5000);
        
    }, 1600); // smooth loading simulation
}

// ---------- INITIALIZATION ----------
function initApp() {
    // set min date to today (disable past)
    setDateConstraints();
    
    // if check-in changes, update checkout min
    checkinInput.addEventListener('change', updateCheckoutMin);
    
    // attach live validators
    attachLiveValidation();
    
    // submit event
    form.addEventListener('submit', handleSubmit);
    
    // set default check-in to tomorrow? (optional: but better leave empty)
    // just placeholder: don't force default dates, but set min properly
}

// start everything when DOM ready
document.addEventListener('DOMContentLoaded', initApp);